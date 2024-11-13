import React from "react";
import "./signup.css";
import SLogo from "../../assets/img/LoadiT.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={SLogo} className="SLogo" />
      <div className="SNickTitle">닉네임</div>
      <input className="SNickInput" />
      <div className="SIdTitle">아이디</div>
      <input className="SIdInput" />
      <div className="SPwTitle">비밀번호</div>
      <input className="SPwInput" />
      <div className="SPwCheckTitle">비밀번호 확인</div>
      <input className="SPwCheckInput" />
      <div>
        <button className="SignUpButton">회원가입</button>
      </div>
      <div className="NavLogin" onClick={() => navigate("/")}>
        이미 LoadiT의 회원이라면?
      </div>
    </div>
  );
};

export default SignUp;
