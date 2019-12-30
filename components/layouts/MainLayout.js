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

const MainLayout = ({ children, title = "Next Book Me" }) => (
  <Default title={title}>
    <header className="header">
      <div className="header__logo">
        <h1>Next Book Me</h1>
      </div>
      <Nav links={links} />
    </header>
    {children}
  </Default>
);

export default MainLayout;
