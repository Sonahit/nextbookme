import React from "react";

import Layout from "@layouts/Layout";

import "@styles/booking.scss";
import withLogin from "../hocs/withLogin";

const Booking = ({ isSigned }) => (
  <Layout isSigned={isSigned}>Booking page</Layout>
);

export default withLogin(Booking);
