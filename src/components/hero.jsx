import React from "react";
import HeroContainer from "./hero-container";
import Header from "./header";

function hero() {
  return (
    <div className="hero">
      <Header />
      <HeroContainer />
    </div>
  );
}

export default hero;
