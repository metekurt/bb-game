import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Board />} />
      </Routes>
    </div>
  );
};

export default App;
