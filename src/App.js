import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token:\n", _token);
  },[]);

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>; 
}

export default App;

//http://localhost:3000/callback#access_token=BQBVI6vqMBXZ-GWSjcOpNsOrJ3VihC9D1LO8To_nWhEcmRfBrtMh3zQgy2xY4V5uEyh4SxqYC_CpXOpLYSZkyIxKyOCyOja5JKyLswh7dgWJRi5wVWLWJWYt9Zt_ChTgQvtPg8yQyckjeStUYn5j3kO1M58&token_type=Bearer&expires_in=3600