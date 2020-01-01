import React from "react";
import Nav from "@components/Nav";

import "@components/Header.scss";

export default function Header({ links }) {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>
          <a href="/">Next Book Me</a>
        </h1>
      </div>
      <Nav links={links} />
    </header>
  );
}
