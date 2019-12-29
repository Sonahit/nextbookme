import React from "react";

import Layout from "@layouts/MainLayout";

import "@styles/login.scss";

const Login = () => {
  /**
   *
   * @param {React.FormEvent} e
   */
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const body = JSON.stringify({ username, password });
    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body,
      redirect: "follow"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Layout>
      Login page
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Login"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </Layout>
  );
};

export default Login;
