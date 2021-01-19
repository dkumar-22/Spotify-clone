import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getToken } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new spotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue(); //useContext(DataLayerContext)

  useEffect(() => {
    const gToken = getToken();
    window.location.hash = "";
    if (gToken) {
      spotify.setAccessToken(gToken);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        dispatch({
          type: "SET_TOKEN",
          token: gToken,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })
    }
  }, [token,dispatch]);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
