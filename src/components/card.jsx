import React from "react";
import i1 from "../assets/pexels-melvin-buezo-2529148.jpg";
import i2 from "../assets/pexels-jordan-hyde-1032110.jpg";
import i3 from "../assets/pexels-scott-webb-137603.jpg";
import i4 from "../assets/pexels-frans-van-heerden-847371.jpg";

function Card1() {
  return (
    <div className="card">
      <img src={i1} alt="Athletic shoes" className="img i1" />
      <p className="img_subtext">
        Exerise footwear the support you mind body and sole.
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="card">
      <img src={i2} alt="Casual Sneakers Shoes" className="img i2" />
      <p className="img_subtext">
        Look cool and comfortable as you take to the street.
      </p>
    </div>
  );
}

function Card3() {
  return (
    <div className="card">
      <img src={i3} alt="Women's shoes" className="img i3" />
      <p className="img_subtext">
        Unisex shoes, offering our very best the both worlds.
      </p>
    </div>
  );
}

function Card4() {
  return (
    <div className="card">
      <img src={i4} alt="Unisex shoes" className="img i4" />
      <p className="img_subtext">
        Unisex shoes, offering our very best the both worlds.
      </p>
    </div>
  );
}
export { Card1, Card2, Card3, Card4 };
