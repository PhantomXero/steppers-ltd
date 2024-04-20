import React from "react";

import { Card1 } from "./card";
import { Card2 } from "./card";
import { Card3 } from "./card";
import { Card4 } from "./card";

function cardHolder() {
  return (
    <div className="cardHolder">
      <h2 className="cardHolder_title">
        We have shoes for everyone. Take your pick
      </h2>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

export default cardHolder;
