import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from "react-plaid-link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAccessTokenThunk } from "../redux/user/user.action";
import { getAccountsThunk } from "../redux/user/user.action";
import Accounts from "./GetAccounts";
import SideBar from "./side-bar";
import plaidImage1 from "../images/plaid.png"; // Import the image
import plaidImage2 from "../images/plaid2.webp"; // Import the image
import plaidImage3 from "../images/plaid3.webp"; // Import the image

import { withTheme } from "@emotion/react";




const LinkPlaid = () => {
  const [link_token, setLinkToken] = useState("");
  const user = useSelector((state) => state.user.user);
  console.log(user)
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

  const config = {
    token: link_token,
    onSuccess: async (public_token, metadata) => {
      // Send the public_token to your app server here.
      // The metadata contains info about the institution the
      // user selected and the account ID or IDs, if the
      // Select Account view is enabled.
      console.log(public_token)
      const response = await axios.post('http://localhost:8080/api/plaid/exchange_public_token', {
        public_token: public_token
      }, {withCredentials: true});
      console.log("access_token:", response.data)
    },
    onExit: (err, metadata) => {
      // handle the case when your user exits Link
      if (err != null) {
        console.error(err);
      }
    },
    onEvent: (eventName, metadata) => {
      // Optionally capture Link flow events, streamed through this callback as your users connect an Item
      console.log(eventName, metadata);
    },
    receivedRedirectUri: null,
  };
  
  const {open, exit, ready} = usePlaidLink(config)
  const popUp = () => {
    open()
  }

 /*----------------------------------------------------------------------------------------------*/ 
  // const access_token = user.plaidAccessToken
  // try {
  //   const accounts = dispatch(getAccountsThunk(access_token))
  //   console.log(accounts)
  // } catch (error) {
  //   console.log(error)
  // }
  
  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={plaidImage1} alt="Plaid" style={{ width: '400px', height: 'auto', padding: '10px' }} /> {/* Replace the <p> tag with this <img> tag */}

        <button className="plaid-button" onClick={popUp} disabled={!ready}> Link with Plaid</button>
        {/* Existing <p> tag */}
        <p style={{
          fontFamily: 'Times New Roman',
          fontWeight: 'normal',
          padding: '10px',
          border: '0.5px solid black',
          borderRadius: '9px',
          backgroundColor: 'snow-gray',
          fontSize: '24px',
        }}>
          Plaid is a vital financial technology solution that provides users of our Finance-Mate app with smooth access to their bank accounts and critical financial data. 
          We ensure a secure and efficient connection to multiple financial institutions by integrating Plaid's cutting-edge APIs into our application. 
          Plaid allows our users to easily view their bank and credit union account information, transaction details, and balances. 
          Manual data entry and the sharing of critical login credentials are no longer viable options. 
          Plaid's solid infrastructure creates a standardized and dependable channel for our app to retrieve critical financial data, 
          allowing us to provide a streamlined and tailored finance experience to our valued consumers.
        </p>
        <div>
        <img src={plaidImage2} alt="Plaid" style={{ width: '450px', height: 'auto', }} />
        <img src={plaidImage3} alt="Plaid" style={{ width: '450px', height: 'auto', }} />
      </div>
      </div>
      
    </div>
  );
};

export default LinkPlaid;

