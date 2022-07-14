import React, { useState } from "react";
import ContactmePopUp from "./contactmePopUp";

export default function BannerContent() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="banner-content">
      <div className="bold-word">
        <h1>Welcome! I'm Nasir, design & develop web applications.</h1>
        <h2>Frontend developer</h2>
        <p>
          Enthusiastic & Self-motivated Frontend Developer with years of
          experience in structuring, developing & designing websites. Well
          demonstration in design principle & ability to rightly combine the
          technical skills to assemble attractive web pages with excellent user
          interface
        </p>
        <a href="#" className="contact-me" onClick={(e) => setPopUp(true)}>
          Contact me
        </a>
      </div>
      {popUp ? <ContactmePopUp setPopUp={setPopUp}></ContactmePopUp> : " "}
    </div>
  );
}
