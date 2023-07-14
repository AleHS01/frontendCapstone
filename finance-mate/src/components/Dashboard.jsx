import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>You are in dashboar</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.plaidAccessToken}</p>
      <p>{user.plaidItemId}</p>
      <br />
      <hr />
      <Link to="/">
        <h2>Go back Home</h2>
      </Link>
    </div>
  );
};
export default Dashboard;
