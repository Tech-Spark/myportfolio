import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const [response, setResponse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n5z5ort",
        "template_d195sfv",
        form.current,
        "XAlsOuqwb-Ox9mMrl"
      )
      .then(
        (result) => {
          setResponse(result.status);
        },
        (error) => {
          console.log(error);
        }
      )
      .then(
        setEmail(""),
        setSubject(""),
        setMessage(""),
        setResponse(""),
        setName("")
      );
  };

  return (
    <div className="form-contact">
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            minLength="3"
            maxLength="50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
          <em></em>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            minLength="8"
            maxLenght="50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <em></em>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            maxLength="100"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
          />
          <em></em>
        </div>
        <div>
          <label htmlFor="message">What do you want to build?</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength="5000"
            required></textarea>
          <em></em>
        </div>
        <div>
          <button type="submit">send</button>
          {response === 200 ? (
            <em style={{ marginLeft: "1rem" }}> message sent succesfully!</em>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
