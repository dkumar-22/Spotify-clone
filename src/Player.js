import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player() {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body />
      </div>
      <div className="player-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
