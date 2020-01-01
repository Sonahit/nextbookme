import React from "react";

import Layout from "@layouts/Layout";

import "@styles/signup.scss";
import withLogin from "../hocs/withLogin";

const Signup = ({ isSigned }) => (
  <Layout isSigned={isSigned}>Signup page</Layout>
);

export default withLogin(Signup);
