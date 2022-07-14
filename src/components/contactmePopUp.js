import React from "react";
import FormContact from "./formContact";

export default function ContactmePopUp({ setPopUp }) {
  return (
    <div className="pop-up">
      <strong className="closed" onClick={() => setPopUp(false)}>
        X
      </strong>
      <p>Send me a message.</p>
      <FormContact></FormContact>
    </div>
  );
}
