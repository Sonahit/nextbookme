import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    const isSigned = () =>
      fetch(`${location.origin}/api/v1/login`, {
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
