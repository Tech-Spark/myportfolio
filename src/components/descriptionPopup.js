import React from "react";

export default function DescriptionPopup(props) {
  const { setDescription, descTransfer } = props;

  return (
    <div>
      <div className="description-popup">
        <div>
          <strong className="closed" onClick={() => setDescription(false)}>
            X
          </strong>
        </div>
        <div>
          <h4>
            Name - <strong>{descTransfer.projectName}</strong>
          </h4>
          <br></br>
          <p className="pgh-one-1line">{descTransfer.articleOne}</p>
          <br></br>
          <p className="pgh-two-1line">{descTransfer.articleTwo}</p>
          <br></br>
          <p className="pgh-three-1line">{descTransfer.articleThree}</p>
          <br></br>
          <p>{descTransfer.closingPoint}</p>
        </div>
      </div>
    </div>
  );
}
