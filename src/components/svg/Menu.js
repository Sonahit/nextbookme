import React from "react";

export default function Menu({ handleClick }) {
  return (
    <div className="burger" onClick={handleClick}>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  );
}
