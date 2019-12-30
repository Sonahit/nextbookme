import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
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
 * @param {import('next/router').Router} props.router
 */
const Nav = ({ links, router }) => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        {links.map(({ key, href, label }) => (
          <li className="nav-item" key={key}>
            <Link href={href}>
              <a
                className={`nav-link ${
                  router.pathname === href ? "active" : ""
                }`}
              >
                {label}
              </a>
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

export default withRouter(Nav);
