import React from "react";

export default function Skills() {
  return (
    <div className="skill-main-div" id="Skills">
      <h2>My Skills</h2>
      <div className="skill-bg-img">
        <div className="skill-container">
          <div className="frontend-skill">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li className="html-icon"> HTML</li>
              <li className="css-icon"> CSS</li>
              <li className="js-icon"> JavaScript</li>
              <li className="react-icon"> React</li>
              <li className="redux-icon"> Redux</li>
              <li className="bootstrap-icon">Bootstrap</li>
              <li className="wordpress-icon"> Wordpress</li>
            </ul>
          </div>
          <div className="skill-image">
            <img src="/images/skills.png" alt="normal" />
          </div>
          <div className="backend-skill">
            <h3>Backend</h3>
            <ul className="skill-list">
              <li className="node-icon"> Node Js</li>
              <li className="express-icon"> Express Js</li>
              <li className="mongodb-icon"> MongoDB</li>
              <li className="mysql-icon"> MySql</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
