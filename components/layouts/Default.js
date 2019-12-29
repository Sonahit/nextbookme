import React from "react";
import Head from "next/head";
import "@layoutStyles/default.scss";

const Default = ({ children, title = "Next Book Me" }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Default;
