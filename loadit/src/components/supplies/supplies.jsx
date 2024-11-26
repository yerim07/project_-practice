import React from "react";
import "./supplies.css";
import Header from "../../hooks/Header/Header";
import { useNavigate } from "react-router-dom";

const Supplies = () => {
  const navigate = useNavigate();
  return (
    <div className="allSupplies">
      <Header />
      <div className="ContentTitle">
        등록할 준비물 <span>*</span>
      </div>
      <input className="ContentTitleInput" />
      <div className="ContentDate">
        등록할 날짜 <span>*</span>
      </div>
      <input className="ContentDateInput" type="date" />
      <div className="ContentMemo">메모</div>
      <textarea className="ContentMemoInput" />
      <input
        type="button"
        className="submit"
        value={"등록"}
        onClick={() => navigate("/main")}
      />
    </div>
  );
};

export default Supplies;
