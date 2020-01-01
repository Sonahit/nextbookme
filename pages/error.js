import React from "react";

import Layout from "@layouts/Layout";

import "@styles/error.scss";
import withLogin from "../hocs/withLogin";

const Error = ({ isSigned }) => <Layout isSigned={isSigned}>Error page</Layout>;

export default withLogin(Error);
