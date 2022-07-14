import React, { useState } from "react";
import SideBar2 from "./sideBar2";
import Socialmedia from "./socialmedia";

export default function Headernav() {
  const [showBar, setShowBar] = useState(false);

  return (
    <div className="header-nav">
      <div className="logo-img">
        <div className="img-circle-div">
          <a href="#">
            <img src="/images/avatar0.png" alt="me" />
          </a>
        </div>
        <h2>Nasir Uddin</h2>
      </div>
      <Socialmedia></Socialmedia>
      <div
        className="menu-bar"
        onClick={() => setShowBar(true)}
        onAnimationEnd={() => setShowBar(false)}>
        {showBar ? <SideBar2></SideBar2> : ""}
        <i className="fa fa-bars fa-3x"></i>
      </div>
    </div>
  );
}
