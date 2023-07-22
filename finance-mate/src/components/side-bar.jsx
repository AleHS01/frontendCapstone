import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

// Imports for sidebar navigation
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RiBankFill } from "react-icons/ri";
import { SlLogout, SlWallet } from "react-icons/sl";
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

  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Arrow to open and close side bar */}
      <div
        className={`bg-dark-green h-screen p-5 pt-8 ${
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
        <div className="inline-flex">
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
        </div>

        {/* All other buttons */}

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <SlLogout
            onClick={handleLogout}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200 ${
              !open && "hidden"
            }`}
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <ImUserTie
            onClick={handleAccount}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleAccount}
          >
            Account
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <ImUsers
            onClick={handleBankAccount}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleBankAccount}
          >
            Bank Accounts
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <SlWallet
            onClick={handleLinkPlaid}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleLinkPlaid}
          >
            Add Payment
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <AiOutlineForm
            onClick={handleFinaceForm}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleFinaceForm}
          >
            Expenses Form
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <GiTakeMyMoney
            onClick={handleExpenseView}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleExpenseView}
          >
            Expenses
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <TbReportMoney
            onClick={handleSetBudget}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleSetBudget}
          >
            Set Budget
          </button>
        </div>

        <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <GrTransaction
            onClick={handleTrans}
            className={`hover:scale-110 hover:shadow-lg hover:text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4`}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={handleTrans}
          >
            Transactions
          </button>

          <button className="Committee-San" onClick={handleCommitteeSan}>
       CommiteeSan
      </button>
        </div>

        {/* <div
          className={`flex items-center rounded-md px-2 py-2  ${
            !open ? "px-1" : "px-4"
          }`}
        >
          <GiTakeMyMoney
            onClick={handleExpenseView}
            className={`hover:scale-110 hover:shadow-lg hover:text-green-200  text-4xl rounded cursor-pointer block float-left mr-2 duration-500 mt-4 `}
          />
          <button
            className={`hover:scale-110 hover:bg-green-300 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold mt-4 font-sans duration-200  ${
              !open && "hidden"
            }`}
            onClick={()=>navigate("/trans-cat")}
          >
            Transaction Breakdown
          </button>
        </div> */}

      </div>
    </div>
  );
}

export default SideBar;

{
  /* <div className="sidebar">
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

    </div> */
}
