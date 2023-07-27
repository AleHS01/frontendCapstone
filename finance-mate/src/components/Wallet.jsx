import React from "react";
import axios from "axios";

const Wallet = () => {
  const handleSend = async () => {
    try {
      //   const response = await axios.put(
      //     "http://localhost:8080/api/transactions/send",
      //     {
      //       amount: 50,
      //       recipientId: 2,
      //     },
      //     {
      //       withCredentials: true,
      //     }
      //   );
      //   console.log("Send in wallet: ", response);

      handleRecieve();
    } catch (error) {
      console.log(error);
    }
  };
  const handleRecieve = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/transactions/receive",
        {
          amount: 30,
          senderId: 3,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          withCredentials: true,
        }
      );
      console.log("Recieved in wallet: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleSend}>Send Money</button>
    </div>
  );
};

export default Wallet;
