import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
//import EntryPage from "./EntryPage";

const spotify = new SpotifyWebApi();

function App() {
  // const [Entry, setEntry] = useState(true);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //console.log("hsah=", hash);
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log("_token", _token);
    if (_token) {
      //console.log("this is running");
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //console.log("name:", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      /*console.log(
        "playlist",
        spotify.getPlaylist("31zjwypn4khzqvk53nuvrcjoopz4")
      );*/

      /* console.log("its working in console");*/
      spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) => {
        /*console.log("respone:", response);*/
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    /*console.log("token =", _token);*/
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
