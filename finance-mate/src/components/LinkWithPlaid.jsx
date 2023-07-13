import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import { useLocation } from "react-router";

// const LinkPlaid = () => {
//   const [token, setToken] = useState("");
//   const [accessToken, setAccessToken] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function getToken() {
//       try {
//         const info = await axios.post(
//           "http://localhost:8080/api/plaid/create_link_token/3"
//         );
//         setToken(info.data.link_token);
//         console.log("Info call in the getToken()", info);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getToken();
//     console.log("Token:", token);
//   }, []);

//   const onSuccess = async (public_token, metadata) => {
//     try {
//       // Log and save metadata
//       console.log("Metadata:", metadata);

//       // Exchange public token
//       const response = await axios.post(
//         `http://localhost:8080/api/plaid/exchange-public-token/3`,
//         {
//           public_token,
//         }
//       );

//       setAccessToken(response.data.access_token);
//       navigate("/");
//       // Handle the response
//       console.log("Token exchange response:", response.data);
//     } catch (error) {
//       console.error("Failed to exchange public token:", error);
//     }
//   };

//   const onExit = (error, metadata) => {
//     // Log and save error and metadata
//     console.log("Error:", error);
//     console.log("Metadata:", metadata);

//     // Handle specific error codes
//     if (error && error.error_code === "INVALID_LINK_TOKEN") {
//       axios
//         .post("http://localhost:8080/api/plaid/create_link_token/3")
//         .then((response) => {
//           const newLinkToken = response.data.link_token;
//           // Update the link token in your component state or wherever it's stored
//           setToken(newLinkToken);
//           // Open Plaid Link again with the new link token
//           open();
//         })
//         .catch((error) => {
//           console.error("Failed to generate new link token:", error);
//         });
//     }

//     // Handle other error codes
//     // Refer to the Plaid documentation for specific error codes and their handling
//   };

//   const config = {
//     onSuccess,
//     onExit,
//     onEvent: (eventName, metadata) => {},
//     token: token,
//     receivedRedirectUri: "http://localhost:3000/payments",
//   };

//   const { open, exit, ready } = usePlaidLink(config);

//   useEffect(() => {
//     if (ready && token) {
//       open();
//     }
//   }, [ready, open, token]);

//   return <div>{/* <p>{token}</p> */}</div>;
// };

const LinkPlaid = () => {
  const [token, setToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getToken() {
      try {
        const info = await axios.post(
          `http://localhost:8080/api/plaid/create_link_token/3`
        );
        setToken(info.data);
        console.log("Info call in getToken():", info);
      } catch (error) {
        console.log(error);
      }
    }
    getToken();
  }, []);

  const onSuccess = async (public_token, metadata) => {
    try {
      // Log and save metadata
      console.log("Metadata:", metadata);

      // Exchange public token
      const response = await axios.post(
        `http://localhost:8080/api/plaid/exchange-public-token/3`,
        {
          public_token,
        }
      );

      setAccessToken(response.data.access_token);
      navigate("/");
      // Handle the response
      console.log("Token exchange response:", response.data);
    } catch (error) {
      console.error("Failed to exchange public token:", error);
    }
  };

  const onExit = (error, metadata) => {
    // Log and save error and metadata
    console.log("Error:", error);
    console.log("Metadata:", metadata);

    // Handle specific error codes
    if (error && error.error_code === "INVALID_LINK_TOKEN") {
      axios
        .post("http://localhost:8080/api/plaid/create_link_token/3")
        .then((response) => {
          const newLinkToken = response.data.link_token;
          setToken(newLinkToken);
          open();
        })
        .catch((error) => {
          console.error("Failed to generate new link token:", error);
        });
    }
  };

  const config = {
    onSuccess,
    onExit,
    onEvent: (eventName, metadata) => {},
    token: token,
    receivedRedirectUri: "http://localhost:3000/payments",
  };

  const { open, exit, ready } = usePlaidLink(config);

  useEffect(() => {
    if (ready && token) {
      open();
    }
  }, [ready, open, token]);

  return <div />;
};

export default LinkPlaid;
