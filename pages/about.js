import React from "react";

import Layout from "@layouts/Layout";

import "@styles/about.scss";
import withLogin from "../hocs/withLogin";

const About = () => <Layout>About page</Layout>;

export default withLogin(About);
