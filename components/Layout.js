import React from "react";
import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </div>
);

export default Layout;
