import React from "react";
import Button from "./buttons";

function heroContainer() {
  return (
    <div className="hero_container">
      <div className="content">
        <h1 className="hero_title">This website is awesome</h1>
        <p className="hero_subtext">
          {" "}
          Your one stop shop for all things footwear. Here at Steppers will want
          you to be about to not just you to look go but we want you to feel
          food too. Why walk a mile in someone else's shoes when you can walk 10
          thousand in your own?
        </p>
        <Button />
      </div>
      <div className="hero_image"></div>
    </div>
  );
}

export default heroContainer;
