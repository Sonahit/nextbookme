import React from "react";

import Layout from "@layouts/Layout";

import "@styles/dashboard.scss";

const Dashboard = ({ isSigned }) => (
  <Layout isSigned={isSigned}>Dashboard page</Layout>
);

export default Dashboard;
