import React from "react";

import Layout from "@layouts/Layout";
import { useRouter } from "next/router";
import Api from "../utils/Api";
import "@styles/login.scss";
import Form from "../components/Form";

/**
 * @type {import('../components/Form').Input[]} inputs
 */
const inputs = [
  {
    name: "username",
    type: "text",
    placeholder: "Username...",
    label: "Username"
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password...",
    label: "Password"
  },
  {
    name: "remember",
    type: "checkbox",
    label: "Remember me"
  }
];

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
  const attributes = {
    onSubmit: handleSubmit
  };
  return (
    <Layout isSigned={isSigned}>
      <section className="login container">
        <Form attributes={attributes} inputs={inputs} />
      </section>
    </Layout>
  );
};

export default Login;
