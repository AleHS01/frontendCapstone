import React, { useState, useEffect } from "react";
import SideBar from "./side-bar";
import { useSelector, useDispatch } from "react-redux";
import PieChart from "./PieChart";

function TransactionCatergory({ transactions }) {
  const all_trans = useSelector((state) => state.trans);
  const [all_categories, setAllCategories] = useState(new Set());
  const [cat_map_trans, set_Cat_Map_Tras] = useState(new Map());

  //extracting categories from all the transactions
  for (let i = 0; i < transactions.length; i++) {
    all_categories.add(transactions[i].personal_finance_category.primary);
  }

  /**Create a map, that has a category as a Key and an array of transactions as an
   * value
   */
  for (const element of all_categories) {
    cat_map_trans.set(element, []); // Set any desired value here
  }

  transactions.forEach((item) => {
    cat_map_trans.set(item.personal_finance_category.primary, [
      ...cat_map_trans.get(item.personal_finance_category.primary),
      item,
    ]);
  });

  cat_map_trans.forEach((value, key) => {
    // console.log(value)
    const total_amount = value.reduce((acc, item) => acc + item.amount, 0);
    cat_map_trans.set(key, total_amount);
  });

  // console.log(cat_map_trans)
  //all_trans now contains categories mapped to accounts

  transactions.forEach((value, key) => {
    // value.reduce((item)=>)
  });
  // const user = useSelector((state) => state.user);
  const [pieChartData, setPieChartData] = useState([]);
  const [pieChartFill, setPieChartFill] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);

  useEffect(() => {
    const patterns = ["squares", "dots", "lines"];

    const processPieData = () => {
      if (cat_map_trans.size > 0 && loadingChart) {
        let data = Array.from(cat_map_trans.entries()).map(([key, value]) => {
          if (value < 1) return {};
          return {
            id: key,
            label: key,
            value: parseInt(value),
          };
        });
        console.log("data:\n", data);
        data = data.filter((obj) => Object.keys(obj).length !== 0);
        setPieChartData(data);
      } else {
        const defaultData = [];
        for (let i = 0; i < 5; i++) {
          defaultData.push({
            id: `Expense ${i + 1}`,
            label: `Expense ${i + 1}`,
            value: Math.floor(Math.random() * 951) + 50,
          });
        }
        console.log("defaultData:\n", defaultData);
        setPieChartData(defaultData);
      }
    };
    const processPieFill = () => {
      if (cat_map_trans.size > 0 && loadingChart) {
        const fill = Array.from(cat_map_trans.entries()).map(([key, value]) => {
          const randomPattern =
            patterns[Math.floor(Math.random() * patterns.length)];

          return {
            match: {
              id: key,
            },
            id: randomPattern,
          };
        });
        console.log("fill:\n", fill);
        setPieChartFill(fill);
      } else {
        const defaultFill = [];
        for (let i = 0; i < 5; i++) {
          const randomPattern =
            patterns[Math.floor(Math.random() * patterns.length)];
          defaultFill.push({
            match: {
              id: `Expense ${i + 1}`,
            },
            id: randomPattern,
          });
        }
        console.log("default fill:\n", defaultFill);
        setPieChartFill(defaultFill);
      }
    };
    // setLoadingChart(true);
    setTimeout(() => {
      processPieData();
      processPieFill();
    }, 250);

    setTimeout(() => {
      setLoadingChart(true);
    }, 500);
  }, [cat_map_trans, loadingChart]);

  return (
    <PieChart className="content" data={pieChartData} fill={pieChartFill} />
  );
}

export default TransactionCatergory;
