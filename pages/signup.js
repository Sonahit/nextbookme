import React from "react";

import Layout from "@layouts/Layout";

import "@styles/signup.scss";
import withLogin from "../hocs/withLogin";

const Signup = () => <Layout>Signup page</Layout>;

export default withLogin(Signup);
