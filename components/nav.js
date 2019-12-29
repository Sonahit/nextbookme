import React from "react";
import Link from "next/link";
import "./Nav.scss";
import PropTypes from "prop-types";
/**
 * @typedef {Object} Link
 * @property {string} href
 * @property {string} label
 * @property {string} key
 *
 * @typedef {Array<Link>} Links
 *
 * @param {Object} props
 * @param {Links} props.links
 */
const Nav = ({ links }) => {
  return (
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
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Nav;
