import React from "react";

import Layout from "@layouts/Layout";

import "@styles/gethelp.scss";
import withLogin from "../hocs/withLogin";

const GetHelp = ({ isSigned }) => (
  <Layout isSigned={isSigned}>GetHelp page</Layout>
);

export default withLogin(GetHelp);
