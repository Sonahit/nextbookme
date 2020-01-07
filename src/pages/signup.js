import React from "react";
import Layout from "@layouts/Layout";
import Api from "../utils/Api";

import "@styles/signup.scss";
import SignupForm from "@components/SignupForm";

/**
 * @type {import('../components/SignupForm').Input[]} inputs
 */
const inputs = [
  {
    name: "username",
    type: "text",
    placeholder: "Username...",
    label: "Username"
  },
  {
    name: "email",
    type: "email",
    ariaHelp: "We'll never share your email with anyone else.",
    placeholder: "Email...",
    label: "Email"
  },
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name...",
    label: "First Name"
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name...",
    label: "Last Name"
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password...",
    label: "Password"
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password"
  }
];

const Signup = ({ isSigned }) => {
  /**
   *
   * @param {React.FormEvent} e
   */
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputs = Array.from(form.elements).reduce((acc, input) => {
      if (input.name) {
        acc = {
          [input.name]: input.value,
          ...acc
        };
      }
      return acc;
    }, {});
    Api.post("/api/v1/signup", {
      body: inputs
    });
    return true;
  };
  /**
   * @type {React.FormHTMLAttributes}
   */
  const attributes = {
    onSubmit: e => {
      handleSubmit(e);
      return true;
    }
  };
  return (
    <Layout isSigned={isSigned}>
      <section className="signup container">
        <SignupForm attributes={attributes} inputs={inputs} />
      </section>
    </Layout>
  );
};

export default Signup;
