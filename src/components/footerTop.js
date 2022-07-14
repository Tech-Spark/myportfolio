import React, { useState } from "react";
import FormContact from "./formContact";
import Socialmedia from "./socialmedia";

export default function FooterTop() {
  const [contact, setConstact] = useState(true);
  return (
    <div className="footer-area" id="contact">
      <div className="knock-div">
        <div className="message">
          <h4>Send me a message</h4>
          <FormContact></FormContact>
        </div>
        <div className="social-footer">
          <h6> Follow me </h6>
          <Socialmedia></Socialmedia>
        </div>
      </div>
      <p className="rights"> copyRight@allrightreserved </p>
    </div>
  );
}
