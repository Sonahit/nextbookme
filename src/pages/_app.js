import React, { useState, useEffect } from "react";
const fetch = require("node-fetch");

export default function App({ Component, pageProps }) {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    const isSigned = async () =>
      await fetch(`http://localhost:3000/api/v1/login`, {
        credentials: "include"
      })
        .then(resp => resp.json())
        .then(json => {
          setLogin(json.success);
        });
    isSigned();
  }, [login]);
  if (login === null) {
    return <div>Loading...</div>;
  }
  return <Component {...pageProps} isSigned={login} setLogin={setLogin} />;
}
