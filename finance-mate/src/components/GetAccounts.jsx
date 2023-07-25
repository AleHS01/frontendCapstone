import React, { useEffect } from "react";
import { fetchUserThunk } from "../redux/user/user.action";
import { getAccountsThunk } from "../redux/accounts/account.action";
import { useSelector, useDispatch } from "react-redux";
// import { loginUserThunk } from "../redux/user/user.action";
import SideBar from "./side-bar";
import { height } from "@mui/system";
import creditdebit from "../images/creditdebit.png"; // Import the image
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { motion, AnimatePresence, isInView, useInView, useAnimation } from "framer-motion";


//MdOutlineAccountBalanceWallet

const Accounts = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  //   console.log("here",state);

  const accounts = useSelector((state) => state.user_accounts);
  console.log("accounts", accounts);
  const user = useSelector((state) => state.user);
  console.log("user-->", user);

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
      <SideBar></SideBar>
      <div className="content p-7">
        <h6 className="text-white my-5 bg-black p-4 rounded-md text-2xl font-extrabold flex items-center ">
          <MdOutlineAccountBalanceWallet className="text-4xl mr-2" />
          Account Information
        </h6>

        {accounts.map((account, index) => (
          <motion.div
          variants={{
            hidden: {opacity:0, y:75},
            visible: {opacity:1, y:0}

          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 1, delay: 0.50}}
            key={index}
            className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mb-4 shadow-md border-8 "
          >
            <h1 className="text-black mr-2 font-serif text-3xl font-semibold w-60">
              <motion.img
              variants={{
                hidden: { opacity: 0, x: -90, scale: 0.1 },
                visible: { opacity: 1, x: 0, scale: 1 }
              }}
              initial="hidden"
              animate="visible"
              transition={{duration: 1, delay:1}}
                className="ml-4"
                src={creditdebit}
                alt="Plaid"
                style={{ width: "450px", height: "auto" }}
              />
            </h1>

            <motion.span
            variants={{
              hidden: { opacity: 0, x: -90, rotate: -45 },
              visible: { opacity: 1, x: 0, rotate: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 1, delay:1}}
            className="bg-black p-6 rounded-md text-white font-semibold font-serif text-xl border-2">
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
