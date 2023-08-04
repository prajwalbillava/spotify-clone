import React from "react";
import "./Login.css";
import { loginurl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <div className="info">
        <h1>Team Tessa</h1>
        <h4>A Spotify Clone by Our Persons</h4>
      </div>

      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      ></img>
      <a href={loginurl}>LOGIN ON SPOTIFY</a>
    </div>
  );
}

export default Login;
