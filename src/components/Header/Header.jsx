import React from "react";
import "./Header.css";

import imagen from "./66133.jpg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={imagen} alt="NASA logo" width={500} />
      </Link>
    </div>
  );
};

export default Header;
