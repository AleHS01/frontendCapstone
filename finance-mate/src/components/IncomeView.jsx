import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "./side-bar";
import PieChart from "./PieChart";


const IncomesView = () => {
  const user = useSelector((state) => state.user.user);
  const [incomes, setIncomes] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [pieChartFill, setPieChartFill] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);

  useEffect(() => {
    const getIncomes = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/income/get", // Update this to your income endpoint
          {},
          { withCredentials: true }
        );

        console.log("Response.data in IncomesView\n", response.data);
        setIncomes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIncomes();
  }, []);

  useEffect(() => {
    const patterns = ["squares", "dots", "lines"];

    const processPieData = () => {
      if (incomes.length > 0 && loadingChart) {
        const data = incomes.map((income) => ({
          id: income.income_name,
          label: income.income_name,
          value: parseFloat(income.income_value),
        }));
        console.log("data:\n", data);
        setPieChartData(data);
      } else {
        const defaultData = [];
        for (let i = 0; i < 5; i++) {
          defaultData.push({
            id: `Income ${i + 1}`,
            label: `Income ${i + 1}`,
            value: Math.floor(Math.random() * 951) + 50, // Generate a random value between 50 and 1000
          });
        }
        console.log("defaultData:\n", defaultData);
        setPieChartData(defaultData);
      }
    };
    const processPieFill = () => {
      if (incomes.length > 0 && loadingChart) {
        const fill = incomes.map((income) => {
          const randomPattern =
            patterns[Math.floor(Math.random() * patterns.length)];
          return {
            match: {
              id: income.income_name,
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
              id: `Income ${i + 1}`,
            },
            id: randomPattern,
          });
        }
        console.log("default fill:\n", defaultFill);
        setPieChartFill(defaultFill);
      }
    };
    setLoadingChart(true);
    setTimeout(() => {
      processPieData();
      processPieFill();
    }, 2000);
  }, [incomes]);

  return (
    <div className="dashboard">
      <SideBar />
      <div className="content">
        <div className="pie-chart-div">
          {loadingChart ? (
            <h3 key="loaded-heading">Income Chart</h3>
          ) : (
            <h3 key="loading-heading">Loading Chart...</h3>
          )}
          <PieChart data={pieChartData} fill={pieChartFill} />
        </div>

        <h1>Hello Incomes</h1>
        {incomes.length > 0 ? (
          incomes.map((income) => {
            return (
              <div key={income.id}>
                <h3>
                  {income.income_name}: ${income.income_value}
                </h3>
              </div>
            );
          })
        ) : (
          <h2>No Incomes Found</h2>
        )}
      </div>
    </div>
  );
};

export default IncomesView;
