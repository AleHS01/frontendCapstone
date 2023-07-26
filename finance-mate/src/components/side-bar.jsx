import React,{useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

import { RiBankFill } from "react-icons/ri";
import { ImUserTie, ImUsers } from "react-icons/im";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { SlLogout, SlWallet } from "react-icons/sl";
import { AiOutlineForm } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { RiExchangeFundsFill } from "react-icons/ri";
import { motion } from "framer-motion";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleLogout = async () => {
    try {
      dispatch(logoutUserThunk());
      console.log("Logout successful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinkPlaid = () => {
    navigate("/link_plaid");
  };

  const handleAccount = () => {
    navigate("/user");
  };
  const handleBankAccount = () => {
    navigate("/bank_accounts");
  };
  const handleFinaceForm = () => {
    navigate("/expense-form");
  };
  const handleExpenseView = () => {
    navigate("/expenses");
  };
  const handleTrans = () => {
    navigate("/transactions");
  };


  const handleSetBudget = () => {
    navigate("/budget-view");
  };
  
  const handleCommitteeSan = () => {
    navigate("/committeesan")
  }

  // const controls = useAnimation();
  // console.log("CONTROLSSS: "+JSON.stringify(controls));

  //const [inView] = useInView();

  const location = useLocation();
  console.log(JSON.stringify(location))
  console.log("Location 1: "+location)

  // useEffect(() => {
  //   if (isLoaded) {
  //     controls.start("visible");
  //     isLoaded= false;
  //   }
  // }, [controls, isLoaded]);
  

  return (
    

    <div className="flex">
      {/* Arrow to open and close side bar */}
      <div
        className={`bg-light-green h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        }  relative duration-300`}
      >
        <BsFillArrowLeftCircleFill
          className={`hover:scale-110 hover:text-black bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* Header */}
        <motion.div 
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate = "visible"
        // {location.state ? "visible" : ""}
        transition={{duration: 0.5, delay: 0.20}}
        viewport={{ once: true }}
        className="inline-flex">
          <RiBankFill
            className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`hover:scale-110 hover:shadow-lg hover:text-black text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Finance-Mate
          </h1>
        </motion.div>

        {/* All other buttons */}

        <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 0.40}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <SlLogout
            onClick={handleLogout}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </motion.div>


        <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 0.60}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <ImUserTie
            onClick={handleAccount}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            // to="/User"
            onClick={handleAccount}
          >
            Account
          </button>
        </motion.div>

        {/* <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 0.80}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <ImUsers
            onClick={handleBankAccount}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleBankAccount}
          >
            Bank Accounts
          </button>
        </motion.div> */}

        {/* <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 1}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <SlWallet
            onClick={handleLinkPlaid}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleLinkPlaid}
          >
            Add Payment
          </button>
        </motion.div> */}

        <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 1.20}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <AiOutlineForm
            onClick={handleFinaceForm}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleFinaceForm}
          >
            Expenses Form
          </button>
        </motion.div>

        <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 1.40}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <GiTakeMyMoney
            onClick={handleExpenseView}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleExpenseView}
          >
            Expenses
          </button>
        </motion.div>

        <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 1.60}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <TbReportMoney
            onClick={handleSetBudget}
            className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleSetBudget}
          >
            Set Budget
          </button>
        </motion.div>

        {/* <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 1.80}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <GrTransaction
            onClick={handleTrans} 
            className={`hover:scale-110 hover:text-white  text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
            style={{ color: 'white' }} 
          />
          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleTrans}
          >
            Transactions
          </button>
        </motion.div> */}

        
          <motion.div
        variants={{
          hidden: location.state ? {opacity: 0, x: -75} : {opacity: 1, x: 0},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 2}}
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
         <RiExchangeFundsFill
          onClick={() => navigate("/committeesan")} 
          className={`hover:scale-110 hover:shadow-lg text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />

          <button
            className={`hover:scale-110 hover:text-white text-white flex rounded-md px-4 py-2 mr-4 items-center mv-4  border-4 font-bold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={()=>navigate("/committeesan")}
          >
            Committee San
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default SideBar;

