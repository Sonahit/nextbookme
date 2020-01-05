import React from "react";
import "./Modal.scss";

export default function Modal({ children }) {
  return (
    <section className="next-modal">
      <section className="next-modal__inner">{children}</section>
    </section>
  );
}
