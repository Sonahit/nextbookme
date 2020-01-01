import React from "react";

import Layout from "@layouts/Layout";
import { useRouter } from "next/router";
import "@styles/login.scss";

const Login = ({ isSigned, setLogin }) => {
  const router = useRouter();
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
      body
    })
      .then(res => {
        if (res.ok) return res;
        throw new Error(res.status, res.statusText);
      })
      .then(resp => {
        if (resp.redirected) {
          setLogin(true);
          router.push(new URL(resp.url).pathname);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Layout isSigned={isSigned}>
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
