import React, { useState, useEffect } from "react";
import SideBar from "./side-bar";
import { useSelector, useDispatch } from "react-redux";
import PieChart from "./PieChart";

function TransactionCatergory({ transactions }) {
  const [all_categories, setAllCategories] = useState(new Set());
  // const [cat_map_trans, set_Cat_Map_Tras] = useState(new Map());

  //extracting categories from all the transactions
  // for (let i = 0; i < transactions.length; i++) {
  //   all_categories.add(transactions[i].personal_finance_category);
  // }

  // /**Create a map, that has a category as a Key and an array of transactions as an
  //  * value
  //  */
  // for (const element of all_categories) {
  //   cat_map_trans.set(element, []); // Set any desired value here
  // }

  // transactions.forEach((item) => {
  //   cat_map_trans.set(item.personal_finance_category, [
  //     ...cat_map_trans.get(item.personal_finance_category),
  //     item,
  //   ]);
  // });

  // cat_map_trans.forEach((value, key) => {
  //   //
  //   const total_amount = value.reduce((acc, item) => acc + item.amount, 0);
  //   cat_map_trans.set(key, total_amount);
  // });

  const cat_map_trans = new Map();
  for (const transaction of transactions) {
    const { personal_finance_category, amount } = transaction;
    if (!cat_map_trans.has(personal_finance_category)) {
      cat_map_trans.set(personal_finance_category, 0);
    }
    cat_map_trans.set(
      personal_finance_category,
      cat_map_trans.get(personal_finance_category) + amount
    );
  }

  //
  //all_trans now contains categories mapped to accounts

  // const user = useSelector((state) => state.user);
  const [pieChartData, setPieChartData] = useState([]);
  const [pieChartFill, setPieChartFill] = useState([]);
  // const [loadingChart, setLoadingChart] = useState(false);

  useEffect(() => {
    const patterns = ["squares", "dots", "lines"];

    const processPieData = () => {
      if (cat_map_trans.size > 0) {
        let data = Array.from(cat_map_trans.entries()).map(([key, value]) => {
          if (value < 1) return {};
          //
          return {
            id: key,
            label: key,
            value: parseInt(value),
          };
        });

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

        setPieChartData(defaultData);
      }
    };
    const processPieFill = () => {
      if (cat_map_trans.size > 0) {
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

        setPieChartFill(defaultFill);
      }
    };
    // setLoadingChart(true);
    // setTimeout(() => {
    processPieData();
    processPieFill();
    // }, 250);
  }, []);

  return (
    <PieChart className="content" data={pieChartData} fill={pieChartFill} />
  );
}

export default TransactionCatergory;

// import React, { useState, useEffect } from "react";
// import PieChart from "./PieChart";

// function TransactionCatergory({ transactions }) {
//   const [pieChartData, setPieChartData] = useState([]);
//   const [pieChartFill, setPieChartFill] = useState([]);
//   const [loadingChart, setLoadingChart] = useState(false);

//   useEffect(() => {
//     const patterns = ["squares", "dots", "lines"];

//     const cat_map_trans = new Map();
//     for (const transaction of transactions) {
//       const { personal_finance_category, amount } = transaction;
//       if (!cat_map_trans.has(personal_finance_category)) {
//         cat_map_trans.set(personal_finance_category, 0);
//       }
//       cat_map_trans.set(
//         personal_finance_category,
//         cat_map_trans.get(personal_finance_category) + amount
//       );
//     }

//     const processPieData = () => {
//       if (cat_map_trans.size > 0) {
//         const data = Array.from(cat_map_trans.entries()).map(([key, value]) => {
//           if (value > 0) {
//             return {
//               id: key,
//               label: key,
//               value: parseInt(value),
//             };
//           }
//           return null;
//         });
//         setPieChartData(data.filter(Boolean));
//       } else {
//         // Generate random data for the default chart
//         const defaultData = [];
//         for (let i = 0; i < 5; i++) {
//           defaultData.push({
//             id: `Expense ${i + 1}`,
//             label: `Expense ${i + 1}`,
//             value: Math.floor(Math.random() * 951) + 50,
//           });
//         }
//         setPieChartData(defaultData);
//       }
//     };

//     const processPieFill = () => {
//       if (cat_map_trans.size > 0) {
//         const fill = Array.from(cat_map_trans.keys()).map((key) => {
//           const randomPattern =
//             patterns[Math.floor(Math.random() * patterns.length)];
//           return {
//             match: {
//               id: key,
//             },
//             id: randomPattern,
//           };
//         });
//         setPieChartFill(fill);
//       } else {
//         // Generate random data for the default chart
//         const defaultFill = [];
//         for (let i = 0; i < 5; i++) {
//           const randomPattern =
//             patterns[Math.floor(Math.random() * patterns.length)];
//           defaultFill.push({
//             match: {
//               id: `Expense ${i + 1}`,
//             },
//             id: randomPattern,
//           });
//         }
//         setPieChartFill(defaultFill);
//       }
//     };

//     setTimeout(() => {
//       processPieData();
//       processPieFill();
//       setLoadingChart(true);
//     }, 500);
//   }, []);

//   return (
//     <PieChart className="content" data={pieChartData} fill={pieChartFill} />
//   );
// }

// export default TransactionCatergory;
