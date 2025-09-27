import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          Jobsta
        </Link>

        <div className="flex-1" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-black">
          <a href="#how-it-works" className="hover:text-[#25D366]">How It Works</a>
          <a href="#why-jobsta" className="hover:text-[#25D366]">Why Jobsta</a>

          {/* ✅ Contact Page Link */}
          <Link to="/contact" className="hover:text-[#25D366]">Contact</Link>

          {/* Signup CTA */}
          <Link
            to="/signup"
            className="bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:bg-[#1da851] transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Hamburger for mobile */}
        <button onClick={toggleMenu} className="md:hidden text-black ml-4">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col gap-4 text-sm text-black px-4 py-4">
          <a href="#how-it-works" onClick={toggleMenu} className="hover:text-[#25D366]">How It Works</a>
          <a href="#why-jobsta" onClick={toggleMenu} className="hover:text-[#25D366]">Why Jobsta</a>

          {/* ✅ Mobile Contact */}
          <Link to="/contact" onClick={toggleMenu} className="hover:text-[#25D366]">Contact</Link>

          <Link
            to="/signup"
            onClick={toggleMenu}
            className="bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:bg-[#1da851] transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;