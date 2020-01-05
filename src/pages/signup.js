import React from "react";

import Layout from "@layouts/Layout";

import "@styles/signup.scss";

const Signup = ({ isSigned }) => (
  <Layout isSigned={isSigned}>
    <form action="/api/v1/signup" method="POST">
      <section class="form-group">
        <label for="username-input">Username</label>
        <input
          type="text"
          class="form-control"
          id="username-input"
          name="username"
          aria-describedby="usernameHelp"
          placeholder="Enter Username"
        />
      </section>
      <div class="form-group">
        <label for="email-input">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email-input"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="firstName-input">First Name</label>
        <input
          type="text"
          class="form-control"
          name="firstName"
          id="firstName-input"
          placeholder="First name"
        />
      </div>
      <div class="form-group">
        <label for="lastName-input">Last Name</label>
        <input
          type="text"
          class="form-control"
          name="lastName"
          id="lastName-input"
          placeholder="Last name"
        />
      </div>
      <div class="form-group">
        <label for="password-input">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password-input"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="check-input" />
        <label class="form-check-label" for="check-input">
          Sign In
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </Layout>
);

export default Signup;
