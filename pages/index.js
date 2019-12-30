import React from "react";
import Layout from "@layouts/MainLayout";

import "@styles/index.scss";

const Home = () => {
  return (
    <Layout>
      <main className="main container">
        <section className="main__header">
          <h1>Next Book Me</h1>
        </section>
        <section className="main__information">{/*  */}</section>
        <section className="main__usability">
          <div>{/*  */}</div>
        </section>
        <section className="main__use-now">{/*  */}</section>
      </main>
    </Layout>
  );
};

export default Home;
