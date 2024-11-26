import React, { useState, useEffect } from "react";
import "./select.css";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "노트", completed: false },
        { id: 2, name: "필기도구", completed: false },
        { id: 3, name: "지갑", completed: false },
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="allSelect">
      {items.map((item) => (
        <div className="selectHook" key={item.id}>
          <input
            type="checkbox"
            className="selectbox"
            checked={item.completed}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <div
            className={`content ${item.completed ? "completed" : ""}`}
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Select;
