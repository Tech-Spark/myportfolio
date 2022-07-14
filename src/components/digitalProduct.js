import React, { useState } from "react";
import appProudcts from "../appProudct";
import ProductDetails from "./productDetails";

export default function DigitalProduct() {
  const [showme, setShowme] = useState(false);
  const [details, setDetails] = useState({});

  const popUp = (item) => {
    setDetails(item);
    setShowme(true);
  };

  return (
    <div className="dgt-product" id="buy">
      <h2 className="buy-app-h2">Buy apps</h2>
      <div className="resume">
        <h3>
          I have alredy built apps & tools what might be useful and interesting
          for you. check it!{" "}
        </h3>
      </div>
      <div className="dgt-pro-container">
        <ul>
          {appProudcts.appProduct.map((item) => (
            <li>
              <div className="product">
                <h5>{item.title}</h5>
                <div className="dgt-img">
                  <img src={item.image} alt="fool" />
                </div>
                <div className="dgt-links">
                  <strong
                    className="app-detils"
                    onClick={() => popUp(item.details)}>
                    Learn more...
                  </strong>
                  <strong> Price: $ {item.price}</strong>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {showme && (
          <ProductDetails
            setShowme={setShowme}
            details={details}></ProductDetails>
        )}
      </div>
    </div>
  );
}
