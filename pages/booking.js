import React from "react";

import Layout from "@layouts/Default";

import "@styles/booking.scss";
import withLogin from "../hocs/withLogin";

const Booking = () => <Layout>Booking page</Layout>;

export default withLogin(Booking);
