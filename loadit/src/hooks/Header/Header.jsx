import React from "react";
import HLogo from "../../assets/img/LoadiT.jpg";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img src={HLogo} className="HLogo" onClick={() => navigate("/main")} />
    </div>
  );
};

export default Header;
