import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
