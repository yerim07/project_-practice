import React from "react";
import "./login.css";
import LLogo from "../../assets/img/LoadiT.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={LLogo} className="LLogo" />
      <div className="LIdTitle">아이디</div>
      <input className="LIdInput" />
      <div className="LPwTitle">비밀번호</div>
      <input className="LPwInput" type="password" />
      <div>
        <button className="LoginButton" onClick={() => navigate("/main")}>
          로그인
        </button>
      </div>
      <div className="NavSignUp" onClick={() => navigate("/signup")}>
        만약 아직 LoadiT의 회원이 아니라면?
      </div>
    </div>
  );
};

export default Login;
