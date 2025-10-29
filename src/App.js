import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BookFinder from "./BookFinder";
import About from "./About";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookFinder />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
