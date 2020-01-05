import React, { useState } from "react";
import Default from "@layouts/Default";
import "@layoutStyles/main.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

const links = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/gethelp",
    label: "Get help"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/login",
    label: "Login"
  },
  {
    href: "/signup",
    label: "Sign up"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const dashboardLinks = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/booking",
    label: "Bookings"
  },
  {
    href: "/gethelp",
    label: "Get help"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/dashboard",
    label: "Dashboard"
  },
  {
    href: "/signoff",
    label: "Sign off"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Layout = ({ children, title = "Next Book Me", isSigned = false }) => {
  const [login, setLogin] = useState(isSigned);
  if (login) {
    return (
      <Default title={title}>
        <Header links={dashboardLinks} />
        {children}
        <Footer links={dashboardLinks} />
      </Default>
    );
  }
  return (
    <Default title={title}>
      <Header links={links} />
      {children}
      <Footer links={links} />
    </Default>
  );
};

export default Layout;
