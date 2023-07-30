import React from "react";
import axios from "axios";

const Wallet = () => {
  const handleSend = async () => {
    try {
      //   const response = await axios.put(
      //     `${process.env.REACT_APP_BACKEND_URL}/api/transactions/send",
      //     {
      //       amount: 50,
      //       recipientId: 2,
      //     },
      //     {
      //       withCredentials: true,
      //     }
      //   );
      //

      handleRecieve();
    } catch (error) {}
  };
  const handleRecieve = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/transactions/receive`,
        {
          amount: 30,
          senderId: 3,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={handleSend}>Send Money</button>
    </div>
  );
};

export default Wallet;
