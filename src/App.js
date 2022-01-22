import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Starred from "./Pages/Starred";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starred" element={<Starred />} />
        <Route exact path="/show/:id" element={<Show />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
