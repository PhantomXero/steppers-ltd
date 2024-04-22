import React from "react";

function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img src={props.img} alt={props.title} className="img i1" />
      <p className="img_subtext">{props.text}</p>
    </div>
  );
}

export default Card;
