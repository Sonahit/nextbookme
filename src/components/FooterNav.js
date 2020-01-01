import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
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
const FooterNav = ({ links, router }) => {
  return (
    <nav className="footer__nav">
      <h5>Navigation</h5>
      <ul className="nav flex-column">
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

FooterNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default withRouter(FooterNav);
