import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getToken } from "./spotify";

function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const gToken = getToken();
    window.location.hash = "";
    if (gToken) setToken(true);
    else setToken(false);
  }, []);
  console.log(token);
  return (
    <div className="app">
      {token ? (<h1>Logged In</h1>): (<Login />)}
    </div>
  );
}

export default App;
