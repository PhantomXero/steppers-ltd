import React from "react";

function Card() {
  return (
    <div className="card" key={id}>
      <img src={img} alt={title} className="img i1" />
      <p className="img_subtext">{text}</p>
    </div>
  );
}

export default Card;
