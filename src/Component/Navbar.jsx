/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-md bg-linear-to-br from-cyan-400 to-pink-500 p-1">
            <div className="bg-white rounded-md">
              <img className="w-10 h-10" src="/Untitled design (1).svg" alt="Logo" />
            </div>
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Pradeep Furniture
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <Link to="/categories" className="hover:text-slate-900">Categories</Link>
          <Link to="/about" className="hover:text-slate-900">About</Link>
          <Link to="/portfolio" className="hover:text-slate-900">Portfolio</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm flex flex-col items-center space-y-4 py-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
