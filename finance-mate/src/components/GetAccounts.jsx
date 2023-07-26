import React, { useEffect } from "react";
import { fetchUserThunk } from "../redux/user/user.action";
import { getAccountsThunk } from "../redux/accounts/account.action";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { motion } from "framer-motion";
import creditdebit from "../images/creditdebit.png"; // Import the image

const Accounts = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.user_accounts);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    try {
      dispatch(fetchUserThunk());
      dispatch(getAccountsThunk());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="content p-4">
        <h6 className="text-white my-2 bg-light-green p-3 rounded-md text-2xl font-extrabold flex items-center">
          <MdOutlineAccountBalanceWallet className="text-4xl mr-2" />
          Account Information
        </h6>

        {accounts.map((account, index) => (
          <motion.div
            key={index}
            className="bg-light-green flex rounded-md p-2 mr-2 items-center mb-2 shadow-md border-2"
          >
            <h1 className="text-black mr-2 font-serif text-xl font-semibold w-48">
              <motion.img
                variants={{
                  hidden: { opacity: 0, x: -90, scale: 0.1 },
                  visible: { opacity: 1, x: 0, scale: 1 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 1 }}
                className="ml-2"
                src={creditdebit}
                alt="Plaid"
                style={{ width: "300px", height: "auto" }}
              />
            </h1>

            <motion.span
              variants={{
                hidden: { opacity: 0, x: -90, rotate: -45 },
                visible: { opacity: 1, x: 0, rotate: 0 }
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
              className="bg-white p-4 rounded-md text-black font-semibold font-serif text-base border-2"
            >
              <h1>Account Name: {account.name}</h1>
              <h3>Subtype: {account.subtype}</h3>
              <h3>Available Balance: ${account.balances.available}</h3>
              <h3>Current Balance: ${account.balances.current}</h3>
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
