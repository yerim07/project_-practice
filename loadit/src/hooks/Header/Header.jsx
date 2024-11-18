import React from "react";
import HLogo from "../../assets/img/LoadiT.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={HLogo} className="HLogo" />
    </div>
  );
};

export default Header;
