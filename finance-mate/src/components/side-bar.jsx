import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

// Imports for sidebar navigation
import {useState} from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RiBankFill} from "react-icons/ri";
import { SlLogout, SlWallet} from "react-icons/sl";
import { ImUserTie, ImUsers } from "react-icons/im";
import { AiOutlineForm } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";

//GrTransaction

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk());
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
    navigate("/trans");
  };

  const handleIncomeForm = () => {
    navigate("/income-form");
  };
  const handleIncomeView = () => {
    navigate("/incomes");
  };

  const handleSetBudget = () => {
    navigate("/budgetform")
  }

  const [open, setOpen]= useState(true);

  return (
    <div className="flex">
      {/* Arrow to open and close side bar */}
      <div className={`bg-dark-green h-screen p-5 pt-8 ${open ? "w-72" : "w-20"}  relative duration-300`} >
      <BsFillArrowLeftCircleFill className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${!open && "rotate-180"}`}
      onClick={()=> setOpen(!open)}
      />

      {/* Header */}
      <div className="inline-flex">
        <RiBankFill className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Finance-Mate</h1>
      </div>

      {/* All other buttons */}

      <div className={`flex items-center rounded-md px-2 py-2 ${!open ? "px-2.5" : "px-4"}`}>
        <SlLogout className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`} />
        <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-400 ${!open && "hidden"}`}
          onClick={handleLogout}>Sign Out</button>
      </div>


      <div className="flex items-center rounded-md px-2 py-2">
        <ImUserTie className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}/>
      <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`}
      onClick={handleAccount}>
        Account
      </button>
      </div>

      <div className="flex items-center rounded-md px-2 py-2">
        <ImUsers className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}/>
        <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`}
        onClick={handleBankAccount}>
        Accounts
      </button>
      </div>

      <div className="flex items-center rounded-md px-2 py-2">
        <SlWallet className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `} />
      <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`} 
      onClick={handleLinkPlaid}>
        Add Payment
      </button>
      </div>
      
      <div className="flex items-center rounded-md px-2 py-2">
        <AiOutlineForm className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}/>
        <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`} 
        onClick={handleFinaceForm}>
        Expenses Form
      </button>
      </div>

      <div className="flex items-center rounded-md px-2 py-2">
      <GiTakeMyMoney className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}/>
        <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`} 
        onClick={handleExpenseView}>
        Expenses
      </button>
      </div>

      <div className="flex items-center rounded-md px-2 py-2">
        <TbReportMoney className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}/>
        <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`} 
        onClick={handleSetBudget}>
        Set Budget
      </button>
      </div>

      <div className="flex items-center rounded-md px-2 py-2">
        <GrTransaction className={`bg-light-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}/>
        <button className={`bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans ${!open && "hidden"}`}
        onClick={handleTrans}>
        Transactions
      </button>
      </div>
      
      
      
      
      
      
      
      </div>
    </div>
  );
}

export default SideBar;




{/* <div className="sidebar">
      <button className="sidebar-button" onClick={handleLogout}>
        Sign Out
      </button>
      <button className="sidebar-button" onClick={handleAccount}>
        Account
      </button>
      <button className="sidebar-button" onClick={handleLinkPlaid}>
        Add Payment
      </button>
      <button className="sidebar-button" onClick={handleBankAccount}>
        Accounts
      </button>
      <button className="sidebar-button" onClick={handleFinaceForm}>
        Expenses Form
      </button>
      <button className="sidebar-button" onClick={handleExpenseView}>
        Expenses
      </button>
      <button className="sidebar-button" onClick={handleSetBudget}>
        Set Budget
      </button>
      <button className="sidebar-button" onClick={handleTrans}>
        Transactions
      </button>

    </div> */}
