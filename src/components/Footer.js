import React from "react";
import FooterNav from "./FooterNav";

import "./Footer.scss";

export default function Footer({ links }) {
  return (
    <footer className="footer">
      <section className="footer__container">
        <section className="footer__information">
          <aside className="footer__about">
            <h5>About</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              massa, eleifend et feugiat vitae, tempus sagittis velit. Maecenas
              feugiat vulputate orci ac placerat.
            </p>
          </aside>
          <main className="footer__tel">
            <h5>Contacts</h5>
            {Array.from({ length: 2 }, (_, i) => ({
              email: "Lorem@ipsum.dolor",
              person: "Sit amet",
              key: `Lorem@ipsum.dolor-Sit amet-${i}`
            })).map(contact => (
              <p key={contact.key}>
                <span className="footer__person text-uppercase">
                  {contact.person}
                </span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            ))}
          </main>
        </section>
        <section className="footer__navigation">
          <FooterNav links={links} />
        </section>
      </section>
      <aside className="footer__desc text-uppercase text-muted">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
          massa, eleifend et feugiat vitae, tempus sagittis velit. Maecenas
          feugiat vulputate orci ac placerat.
        </p>
      </aside>
    </footer>
  );
}
