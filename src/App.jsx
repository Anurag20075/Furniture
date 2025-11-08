import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Component/Categories";
import DetailedWrapper from "./Component/DetailedWrapper";
import Navbar from "./Component/Navbar";
// import HomePage from "./Component/Home";

function App() {
  return (
    <Router>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/product/:id" element={<DetailedWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
