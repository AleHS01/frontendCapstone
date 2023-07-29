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



  // <div className="dashboard">
  //     <SideBar />
  //     <div className="content p-3">
  //       <PageHeader page_name="My Budgets Dashboard" />
  //       <BudgetViewBanner />
  //       <Grid container spacing={1} sx={{ marginBottom: "100px" }}>
  //         <Grid item xs={12} style={{ height: "400px" }}>
  //           <Typography
  //             variant="h4"
  //             sx={{ textAlign: "center", fontWeight: "500", color: "#0e365e" }}
  //           >
  //             Budgets Overview
  //           </Typography>
  //           {lineChartData && selectedBudget && budgetExpenses ? (
  //             <div
  //               style={{
  //                 height: "100%",
  //                 width: "90%",
  //                 minWidth: "600px",
  //                 margin: "0 auto",
  //               }}
  //             >
  //               <Select
  //                 variant="outlined"
  //                 label="Budget Category"
  //                 value={selectedBudgetId}
  //                 onChange={(e) => setSelectedBudgetId(e.target.value)}
  //                 sx={{ width: "200px", textAlign: "center" }}
  //               >
  //                 {budgets.map((budget) => (
  //                   <MenuItem key={budget.id} value={budget.id}>
  //                     {budget.budget_name}
  //                   </MenuItem>
  //                 ))}
  //               </Select>
  //               <LineChart data={lineChartData} />
  //             </div>
  //           ) : (
  //             <div>
  //               <Skeleton variant="rectangular" height={400} />
  //               <Typography
  //                 variant="body1"
  //                 sx={{
  //                   textAlign: "center",
  //                   fontWeight: "500",
  //                   color: "#0e365e",
  //                   mt: 2,
  //                 }}
  //               >
  //                 Your expense overview is loading...
  //               </Typography>
  //             </div>
  //           )}
  //         </Grid>
  //       </Grid>
  //       <Grid
  //         container
  //         alignItems="center"
  //         spacing={2}
  //         sx={{ mt: "20px", height: "40px" }}
  //       >
  //         <Grid item sx={{ ml: "40px" }}>
  //           <Typography variant="h6" sx={{ color: "#05377f" }}>
  //             Sort By Amount:
  //             <Tooltip title="Sort Ascending" placement="top">
  //               <IconButton onClick={handleSortAsc}>
  //                 <ArrowUpwardIcon
  //                   fontSize="small"
  //                   sx={{ color: "#9da3ab", cursor: "pointer" }}
  //                   className="filter-arrows"
  //                 />
  //               </IconButton>
  //             </Tooltip>
  //             <Tooltip title="Sort Descending" placement="top">
  //               <IconButton onClick={handleSortDesc}>
  //                 <ArrowDownwardIcon
  //                   fontSize="small"
  //                   sx={{ color: "#9da3ab", cursor: "pointer" }}
  //                   className="filter-arrows"
  //                 />
  //               </IconButton>
  //             </Tooltip>
  //           </Typography>
  //         </Grid>
  //         <Grid item xs>
  //           <Divider
  //             orientation="vertical"
  //             variant="middle"
  //             sx={{ borderColor: "#4CAF50", height: "100%" }}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <Typography
  //             variant="h4"
  //             sx={{ fontWeight: "500", color: "black" }}
  //           >
  //             Overview of Your Budgets
  //           </Typography>
  //         </Grid>
  //         <Grid item xs>
  //           <Divider
  //             orientation="vertical"
  //             variant="middle"
  //             sx={{ borderColor: "#4CAF50", height: "100%" }}
  //           />
  //         </Grid>
  //         <Grid item sx={{ mr: "10px" }}>
  //           <Chip
  //             label="Add Budget"
  //             component={Link}
  //             to="/budgetform"
  //             clickable
  //             sx={{
  //               backgroundColor: "limegreen",
  //               color: "#fff",
  //               "&:hover": {
  //                 backgroundColor: "#05377f",
  //               },
  //             }}
  //           />
  //         </Grid>
  //         <Grid item sx={{ mr: "40px" }}>
  //           <Chip
  //             label="Add Expense"
  //             component={Link}
  //             to='/budget-expense/1'
  //             clickable
  //             sx={{
  //               backgroundColor: "black",
  //               color: "#fff",
  //               "&:hover": {
  //                 backgroundColor: "#05377f",
  //               },
  //             }}
  //           />
  //         </Grid>
  //       </Grid>

  //       <BudgetBoxesContainer>
  //         {sortedBudget.map((budget, index) => {
  //           return (
  //             <Tooltip key = {index}title="View Budget Details" placement="bottom">
  //               <BBox>
  //                 <BudgetInfoContainer>
  //                   <Link
  //                     to={`/budget-expense/${budget.id}`}
  //                     key={index}
  //                     style={{
  //                       display: "flex",
  //                       justifyContent: "space-between",
  //                       width: "100%",
  //                     }}
  //                   >
  //                     <BudgetName>{budget.budget_name}</BudgetName>
  //                     <BudgetAmount style={{ marginRight: "20px" }}>
  //                       ${budget.amount}
  //                     </BudgetAmount>
  //                   </Link>
  //                 </BudgetInfoContainer>

  //                 <Tooltip title="Delete Budget" placement="right">
  //                   <IconButton
  //                     aria-label="delete"
  //                     // onClick={() => handleDeleteExpense(expense.id)}
  //                     sx={{
  //                       position: "absolute",
  //                       top: "10px",
  //                       right: "10px",
  //                       // marginLeft: "10px",
  //                     }}
  //                     onClick={() => deleteBudget(budget)}
  //                   >
  //                     <DeleteIcon style={{ color: "red" }} />
  //                   </IconButton>
  //                 </Tooltip>
  //               </BBox>
  //             </Tooltip>
  //           );
  //         })}
  //       </BudgetBoxesContainer>
  //     </div>
  //   </div>

  return (
    <div className="dashboard">
      <SideBar />
      <div className="content p-3">
        <PageHeader page_name="My Budgets Dashboard" />
        <LinkPlaidBanner />
        <Grid container spacing={1} sx={{ marginBottom: "100px" }}>
          <Grid item xs={12} style={{ height: "400px" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "500", color: "#0e365e" }}
            >
              Budgets Overview
            </Typography>
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
            />
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
              Secure Banking with Plaid
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
          </Grid>
        </Grid>
      </div>
    </div>

  );
};

export default LinkPlaid;

/**
 * {/* <div className="dashboard" style={{ display: "flex", flexDirection: "column" }}>
      <SideBar />
      <div className="content p-1">
        <PageHeader page_name="Link Banks with Plaid" />
        <LinkPlaidBanner />
        <Grid container spacing={1} sx={{ marginBottom: "100px" }}>
          <Grid item xs={12} style={{ height: "400px" }}></Grid>
        </Grid>
      </div>
      <div
        className="content p-1"
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
        />
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
          Secure Banking with Plaid
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
      </div>
    </div> */

