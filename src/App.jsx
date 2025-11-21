import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Component/Categories";
import DetailedWrapper from "./Component/DetailedWrapper";
import Navbar from "./Component/Navbar";
import HomePage from "./Component/Home";
import Footer from "./Component/Footer";
import AboutPage from "./Component/About";
import Contact from "./Component/Contact";
import PradeepFurniturePortfolio from "./Component/Portfolio";

import AI from "./Component/AI";
function App() {
  return (
    <Router>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<DetailedWrapper />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<PradeepFurniturePortfolio />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
