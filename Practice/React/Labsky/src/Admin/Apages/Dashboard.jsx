import React from "react";
import Aheader from "../Acoman/Aheader";
import Navdata from "../Acoman/Navdata";

const Dashboard = () => {
  return (
    <div>
      <Aheader />
      <Navdata title="Admin Dashboard" name="Dashboard" />
      <h1 className="text-center">Hello Welcome Admin Dashboard</h1>
    </div>
  );
};

export default Dashboard;
