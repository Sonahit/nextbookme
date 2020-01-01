import React from "react";

import Layout from "@layouts/Layout";

import "@styles/dashboard.scss";
import withLogin from "../../hocs/withLogin";

const Dashboard = ({ isSigned }) => (
  <Layout isSigned={isSigned}>Dashboard page</Layout>
);

export default withLogin(Dashboard);
