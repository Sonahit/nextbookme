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
    const userInput = e.target.username;
    const pswdInput = e.target.password;
    fetch("/api/v1/login", {
      method: "POST"
    })
      .then(res => {})
      .catch(err => {});
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
