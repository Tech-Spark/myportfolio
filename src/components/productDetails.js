import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ProductDetails(props) {
  const { setShowme, details } = props;
  const [response, setResponse] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [buying, setBuying] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setBuying(value);
  };
  console.log(buying);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n5z5ort",
        "template_6rvpoyi",
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
      .then(setEmail(""), setResponse(""), setFullName(""));
  };

  return (
    <div className="product-dt">
      <div className="close-popup">
        <strong onClick={() => setShowme(false)}>X</strong>
      </div>
      <div className="content-popup">
        <h4>{details.name}</h4>
        <p>{details.useCase}</p>
        <p>{details.feature}</p>
        <p>{details.technology}</p>
      </div>
      <div className="paypal-link">
        <div>
          <h5>Would you like to buy this product? ask for a payment link!</h5>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="pay-input-box">
            <label htmlFor="user_name">FullName *</label>
            <input
              type="text"
              minLength="3"
              maxLength="50"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              name="user_name"
              required
            />
            <em></em>
          </div>
          <div className="pay-input-box">
            <label htmlFor="user_email">Email *</label>
            <input
              type="email"
              minLength="8"
              maxLenght="50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              required
            />
            <em></em>
          </div>
          <div className="pay-selection">
            <label htmlFor="login-as">Select buying options *</label>
            <select name="Buying" id="buy" onChange={handleChange} required>
              <option
                value={`I want to buy this product "${details.name}"`}
                selected>
                I want to buy this product
              </option>
              <option value={`I want to rent / subscribe "${details.name}"`}>
                I want to rent / subscribe
              </option>
            </select>
          </div>
          <div className="btn-container">
            <button type="submit">Ask for payment?</button>
            {response === 200 ? (
              <em className="message" style={{ marginLeft: "1rem" }}>
                {" "}
                message sent succesfully!
              </em>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
