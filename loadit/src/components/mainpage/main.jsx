import React from "react";
import "./main.css";
import Header from "../../hooks/Header/Header";
import Select from "../../hooks/Select/select";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header className-="Head" />
      <div className="SuppliesField">
        <div className="TodayDate">2024.11.4</div>
        <div className="SuppliesTitle">오늘 당신이 챙겨야할 준비물은?</div>
        <Select />
        <input
          type="button"
          className="SuppliesButton"
          value={"준비물 추가"}
          onClick={() => navigate("/supplies")}
        />
      </div>
      <div className="weatherField">
        <div className="weatherLocation">나의 위치</div>
        <div className="weatherLocationNow">대구광역시</div>
      </div>
    </div>
  );
};

export default Main;
