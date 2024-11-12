import React from "react";
import "./login.css";
import Logo from "../../assets/img/LoadiT.jpg";

const Login = () => {
  return (
    <div>
      <img src={Logo} className="Logo" />
      <div className="IdTitle">아이디</div>
      <input className="IdInput" />
      <div className="PwTitle">비밀번호</div>
      <input className="PwInput" />
    </div>
  );
};

export default Login;
