import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAccessTokenThunk } from "../redux/user/user.action";
import { getAccountsThunk } from "../redux/accounts/account.action";
import Accounts from "./GetAccounts";
import SideBar from "./side-bar";
import plaidImage1 from "../images/plaid.png"; // Import the image
import plaidImage2 from "../images/plaid2.webp"; // Import the image
import plaidImage3 from "../images/plaid3.webp"; // Import the image
import { ImLink } from "react-icons/im";

import {
  Grid,
  Typography,
  Divider,
  Chip,
  IconButton,
  Card,
  CardContent,
  Tooltip,
  Skeleton,
  Select,
  MenuItem,
} from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import LinkPlaidBanner from "./LinkPlaidBanner";
import PageHeader from "./PageHeader";



//ImLink
//import plaidImage4 from "../images/creditcards.p"; // Import the image

import { withTheme } from "@emotion/react";

const LinkPlaid = () => {
  const [link_token, setLinkToken] = useState("");
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  async function getLinkToken() {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/plaid/create_link_token`,
      {},
      { withCredentials: true }
    );

    setLinkToken(response.data.link_token);
  }

  useEffect(() => {
    getLinkToken();
  }, []);

  const config = {
    token: link_token,
    onSuccess: async (public_token, metadata) => {
      // Send the public_token to your app server here.
      // The metadata contains info about the institution the
      // user selected and the account ID or IDs, if the
      // Select Account view is enabled.

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/plaid/exchange_public_token`,
        {
          public_token: public_token,
        },
        { withCredentials: true }
      );
    },
    onExit: (err, metadata) => {
      // handle the case when your user exits Link
      if (err != null) {
        console.error(err);
      }
    },
    onEvent: (eventName, metadata) => {
      // Optionally capture Link flow events, streamed through this callback as your users connect an Item
    },
    receivedRedirectUri: null,
  };

  const { open, exit, ready } = usePlaidLink(config);
  const popUp = () => {
    open();
  };

  /*----------------------------------------------------------------------------------------------*/
  // const access_token = user.plaidAccessToken
  // try {
  //   const accounts = dispatch(getAccountsThunk(access_token))
  //
  // } catch (error) {
  //
  // }

  return (

    
    <div className="dashboard">


      <SideBar></SideBar>
      <div className="dashboard">
      <SideBar />
      <div className="content p-3">
        <PageHeader page_name = "Link Banks with Plaid"></PageHeader>
        <LinkPlaidBanner></LinkPlaidBanner>
        <Grid container spacing={1} sx={{ marginBottom: "100px" }}>
          <Grid item xs={12} style={{ height: "400px" }}>
         </Grid></Grid>
         </div>
         </div>
      <div
        //transition={{ duration: 0.7 }}
        className="content p-7"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, x: -90, scale: 0.5 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.35 }}
          src={plaidImage1}
          alt="Plaid"
          style={{ width: "400px", height: "auto", padding: "10px" }}
        />{" "}
        {/* Replace the <p> tag with this <img> tag */}
        <br />
        <motion.button
          variants={{
            hidden: { opacity: 0, x: 90, scale: 0.5 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.45 }}
          className="plaid-button flex items-center"
          onClick={popUp}
          disabled={!ready}
        >
          Link with Plaid
          <ImLink className="ml-2" />
        </motion.button>
        <br />
        {/* Existing <p> tag */}
        <br />
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-bold font-serif text-xl "
        >
          Secure Banking with plaid
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-evenly border border-black border-opacity-50 rounded-lg bg-gradient-to-r from-green-200 to-green-400"
        >
          <motion.img
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.65 }}
            className="ml-4"
            src={plaidImage2}
            alt="Plaid"
            style={{ width: "450px", height: "auto" }}
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
            className="ml-4"
            src={plaidImage3}
            alt="Plaid"
            style={{ width: "450px", height: "auto" }}
          />
        </motion.div>
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.9 }}
          className="border-8 text-base font-serif p-4 border border-green-500 border-opacity-50 rounded-lg bg-gradient-to-r from-green-100 to-green-200 text-lg"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex justify-center font-semibold text-xl font-serif"
          >
            What is Plaid?
          </motion.h1>
          Plaid is a vital financial technology solution that provides users of
          our Finance-Mate app with smooth access to their bank accounts and
          critical financial data. We ensure a secure and efficient connection
          to multiple financial institutions by integrating Plaid's cutting-edge
          APIs into our application. Plaid allows our users to easily view their
          bank and credit union account information, transaction details, and
          balances. Manual data entry and the sharing of critical login
          credentials are no longer viable options. Plaid's solid infrastructure
          creates a standardized and dependable channel for our app to retrieve
          critical financial data, allowing us to provide a streamlined and
          tailored finance experience to our valued consumers.
        </motion.p>
      </div>
    </div>
  );
};

export default LinkPlaid;
