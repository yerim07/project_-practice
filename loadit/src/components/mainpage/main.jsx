import React from "react";
import "./main.css";
import Header from "../../hooks/Header/Header";

const Main = () => {
  return (
    <div>
        <div></div>
      <Header className-="Head"/>
      <div className="SuppliesField">
        <div className="TodayDate">2024.11.4</div>
        <div className="SuppliesTitle">오늘 당신이 챙겨야할 준비물은?</div>
      </div>
    </div>
  );
};

export default Main;
