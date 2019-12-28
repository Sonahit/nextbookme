import React from "react";
import Head from "next/head";
import Nav from "./node_modules/@components/nav";
import "./node_modules/@styles/layout.scss";

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Layout;
