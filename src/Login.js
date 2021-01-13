import React from "react";
import "./Login.css";
import { loginURL } from "./spotify";

function Login() {
  return (
    <div className="login-page">
      <img
        src="https://pinupsandpompadours.com/wp-content/uploads/2020/09/Spotify_Logo_RGB_White.png"
        alt="Spotify Logo"
        className="spotify-logo"
      />
      <a href={loginURL} className="login-btn">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
