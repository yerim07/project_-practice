import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
