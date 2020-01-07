import React from "react";

import Layout from "@layouts/Layout";
import { useRouter } from "next/router";
import Api from "../utils/Api";
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
    const body = { username, password };
    Api.post("/api/v1/login", {
      body
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
      <form
        onSubmit={e => {
          handleSubmit(e);
          return true;
        }}
      >
        <input type="text" name="username" placeholder="Login"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </Layout>
  );
};

export default Login;
