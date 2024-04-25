import React from "react";

import Card from "./card/Cards.jsx";
import { Cards } from "./card/Cards.jsx";

function cardHolder() {
  return (
    <div className="cardHolder">
      <h2 className="cardHolder_title">
        We have shoes for everyone. Take your pick
      </h2>
      <div className="cards">
        {Cards.map(({ id, title, img, text }) => (
          <Card key={id} title={title} img={img} text={text} />
        ))}
      </div>
    </div>
  );
}

export default cardHolder;
