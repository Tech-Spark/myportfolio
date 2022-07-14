import React, { useState } from "react";
import DescriptionPopup from "./descriptionPopup";
import data from "../descriptionData";

export default function Portfolio(props) {
  const [description, setDescription] = useState(false);
  const [descTransfer, setDescTransfer] = useState("");

  function showme(dec) {
    setDescription(true);
    setDescTransfer(dec);
  }

  return (
    <div className="portfolio" id="work">
      <h1>Work, I've done recently.</h1>
      <div className="project-container">
        {data.descript.map((det) => (
          <div className="project">
            <div className="logo-box">
              <img src={det.image} alt="logorarecarry" />
              <h3>{det.title}</h3>
            </div>
            <ul>
              <li>
                <a href={det.url} target="_blank" rel="noopener">
                  visit
                </a>
              </li>
              <li className="git-sources">
                <a href={det.sourceUrl} target="_blank" rel="noopener">
                  source
                </a>
              </li>
              <li onClick={() => showme(det.article)}>description</li>
            </ul>
          </div>
        ))}
      </div>
      {description ? (
        <DescriptionPopup
          setDescription={setDescription}
          descTransfer={descTransfer}></DescriptionPopup>
      ) : (
        ""
      )}
    </div>
  );
}
