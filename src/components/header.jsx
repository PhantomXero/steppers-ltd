import React from "react";

function header() {
  return (
    <header className="header">
      <div className="logo">Steppers Logo</div>
      <ul className="header_links">
        <li className="link">
          <a href="#" className="header-link">
            Men's shoes
          </a>
        </li>
        <li className="link">
          <a href="#" className="header-link">
            Women's shoes
          </a>
        </li>
        <li className="link">
          <a href="#" className="header-link">
            Children's shoes
          </a>
        </li>
      </ul>
    </header>
  );
}

export default header;
