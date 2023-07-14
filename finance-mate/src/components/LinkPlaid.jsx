import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
  PlaidLinkOnExit,
  PlaidLinkOnSuccessMetadata,
  PlaidLinkOnExitMetadata,
  PlaidLinkError,
  PlaidLinkOnEvent,
  PlaidLinkOnEventMetadata,
  PlaidLinkStableEvent,
} from "react-plaid-link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAccessTokenThunk } from "../redux/user/user.action";

const LinkPlaid = () => {
  const [link_token, setLinkToken] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  async function getLinkToken() {
    const response = await axios.post(
      "http://localhost:8080/api/plaid/create_link_token",
      {},
      { withCredentials: true }
    );

    console.log("Response 'FrontEnd' link_token:\n", response.data.link_token);
    setLinkToken(response.data.link_token);
  }

  useEffect(() => {
    getLinkToken();
  }, []);

  //----------------Plaid Link Config Options-------------
  const onSuccess = useCallback(
    async (public_token, metadata = PlaidLinkOnSuccessMetadata) => {
      try {
        console.log("Metadata:\n", metadata);

        await dispatch(getAccessTokenThunk(public_token));

        // const response = await axios.post(
        //   "http://localhost:8080/api/plaid/exchange_public_token",
        //   { public_token },
        //   { withCredentials: true }
        // );

        // console.log("Response Data:\n", response.data);
      } catch (error) {
        // Handle the error
        console.log(error);
      }
    },
    []
  );

  const onExit = useCallback(
    (error = PlaidLinkError, metadata = PlaidLinkOnExitMetadata) => {
      if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
        getLinkToken();
      }

      console.log("Display Error:\n", error.display_message);
      console.log("Error Metadata:\n", metadata);
    },
    []
  );

  const onEvent = useCallback(
    (eventName = PlaidLinkStableEvent, metadata = PlaidLinkOnEventMetadata) => {
      console.log("Event Name:\n", eventName);
      console.log("Event MetaData:\n", metadata);
    },
    []
  );
  //------------------------------------------------------

  const config = (PlaidLinkOptions = {
    onSuccess: onSuccess,
    onExit: onExit,
    onEvent: onEvent,
    token: link_token,
    //required for OAuth; if not using OAuth, set to null or omit:
    receivedRedirectUri: "http://localhost:3000/dashboard",
  });

  const { open, exit, ready } = usePlaidLink(config);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ready && link_token) {
        open();
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [ready, open, link_token]);
  return (
    <div>
      <h1>You are inside Link PLaid</h1>
      <PlaidLinkOnSuccess onSuccess={onSuccess} />
      <PlaidLinkOnEvent onEvent={onEvent} />
      <PlaidLinkOnExit onExit={onExit} />
    </div>
  );
};

export default LinkPlaid;
