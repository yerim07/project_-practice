import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Main from "./components/mainpage/main";
import Supplies from "./components/supplies/supplies";
import Detail from "./components/Detail/detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/supplies" element={<Supplies />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
