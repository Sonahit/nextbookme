import React from "react";
import Link from "next/link";
import "./Nav.scss";
import PropTypes from "prop-types";

const Nav = ({ links }) => (
  <nav className="nav">
    <ul className="nav__list">
      {links.map(({ key, href, label }) => (
        <li className="nav__element" key={key}>
          <Link href={href}>
            <a className="nav__link">{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  links: PropTypes.arrayOf({
    key: PropTypes.string,
    href: PropTypes.string,
    label: PropTypes.any
  }).isRequired
};

export default Nav;
