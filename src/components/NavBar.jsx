import React from "react";
import { useState } from "react";

import logo from "../assets/logo.jpeg";

import { Link } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";

const NavBar = () => {
  const [hideOrShow, sethideOrShow] = useState("hide")

  return (
    <>
      <div className={`menu ${hideOrShow}`}>
        <div className="con">
          <i onClick={() => {sethideOrShow("hide")}} className="fa-solid fa-xmark"></i>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>

      <nav>
        <p>
          <Online>
            <i className="fa-solid fa-rss conn"></i>
          </Online>
          <Offline>
            <i className="fa-solid fa-rss disConn"></i>
          </Offline>
        </p>

        <img src={logo} alt="Concrete Logo" />

        <i onClick={() => {sethideOrShow("show")}} className="fa-solid fa-bars"></i>
      </nav>
    </>
  );
};

export default NavBar;
