import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
  } from 'react-plaid-link';

  const config = {
    onSuccess: (public_token, metadata) => {},
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: 'GENERATED_LINK_TOKEN',
  // required for OAuth; if not using OAuth, set to null or omit:
    receivedRedirectUri: window.location.href,
  }

  const LinkPlaid = () => {
    const [token, setToken] = useState("")
    // const {open, exit, ready} = usePlaidLink(config)
    useEffect(() => {
        async function getId() {
            try {
                const info = await axios.post("http://localhost:8080/api/plaid/create_link_token/4")
                setToken(info.data)
                console.log(info)
            } catch (error) {
                console.log(error) 
            }
        }
        getId()
    })

    return(
        <div>
            <p>{token}</p>
        </div>
    )

  }

export default LinkPlaid