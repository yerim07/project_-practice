import React from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import Header from "../../hooks/Header/Header";

const data = [
  {
    id: 1,
    name: "노트",
    completed: false,
    memo: "메모에요 메모",
    date: "2024. 11.24",
  },
  {
    id: 2,
    name: "필기도구",
    completed: false,
    memo: "메모에요 메모",
    date: "2024. 11.23",
  },
  { id: 3, name: "지갑", completed: false, memo: "", date: "2024. 11.22" },
];

const Detail = () => {
  const { id } = useParams();
  const item = data.find((d) => d.id === parseInt(id));

  if (!item) {
    return <div>해당 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Header />
      <div className="detailBox">
        <div className="detailItemTitle">등록된 준비물</div>
        <div className="detailItem">{item.name}</div>
        <div className="detailDateTitle">등록된 날짜</div>
        <div className="detailDate">{item.date}</div>
        <div className="detailMemoTitle">상세 메모</div>
        <div className="detailMemo">{item.memo || "메모가 없습니다."}</div>
      </div>
    </div>
  );
};

export default Detail;
