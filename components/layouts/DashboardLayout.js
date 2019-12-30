import React from "react";
import Nav from "@components/nav";
import "@layoutStyles/dashboard.scss";
import Default from "./Default";

const links = [
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
    href: "/signoff",
    label: "Sign off"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const DashboardLayout = ({ children, title = "Next Book Me" }) => (
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

export default DashboardLayout;
