import React from "react";
import Nav from "@components/nav";
import Default from "./Default";
import "@layoutStyles/main.scss";

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

const MainLayout = ({ children, title }) => (
  <Default title={title}>
    <Nav links={links} />
    {children}
  </Default>
);

export default MainLayout;
