import Button from "./buttons";

import React from "react";

function callToAction() {
  return (
    <div className="callToAction">
      <div className="call">
        <div className="call-content">
          <h3 className="call-title">Call to action</h3>
          <p className="call-instruction">
            Sign up for our products, notifications and memebers only discount
            codes by clicking the sign up button
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default callToAction;
