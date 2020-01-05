import React, { useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import "@components/Nav.scss";
import PropTypes from "prop-types";
import Menu from "@svg/Menu";
import isWindow from "@utils/isWindow";
import Modal from "../utils/components/Modal";
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
  const [responsive, setResponsive] = useState(
    isWindow.widthLessOrEqualsThan(860)
  );
  window.addEventListener("resize", () =>
    isWindow.widthLessOrEqualsThan(860)
      ? setResponsive(true)
      : setResponsive(false)
  );
  if (responsive) {
    /**
     *
     * @param {React.MouseEvent} e
     */
    const handleClick = e => {
      const header = e.currentTarget.parentNode;
      const modal = header.querySelector(".next-modal");
      const burger = header.querySelector(".burger");
      burger.classList.toggle("active");
      modal.classList.toggle("active");
    };
    return (
      <>
        <Menu handleClick={handleClick} />
        <Modal>
          <nav className="modal-nav">
            <ul className="nav modal-nav__list">
              {links.map(({ key, href, label }) => (
                <li className="nav-item modal-nav__item" key={key}>
                  <Link href={href}>
                    <a
                      className={`nav-link modal-nav__link ${
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
        </Modal>
      </>
    );
  }
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
