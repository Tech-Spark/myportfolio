import React from "react";

export default function Socialmedia() {
  return (
    <div>
      <div className="social-media">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/md-nasir-uddin-5b39aa150"
              rel="noopener"
              target="_blank">
              <i className="fa fa-linkedin link-me"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCCzW3snkYzEtfqDT-l8r7Fg"
              rel="noopener"
              target="_blank">
              <i className="fa fa-youtube tube-me"></i>
            </a>
          </li>
          <li>
            <i className="fa fa-facebook book-me"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
