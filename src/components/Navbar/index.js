import React, { useEffect, useState } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR, useHistory } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";
import { useStateValue } from "../../services/StateProvider";

import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="pb-6 bg-black lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="text-white text-lg font-bold">Logo</div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="#feature"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Features
            </a>
            {/* <a
              href="#"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Resources
            </a> */}
            <a
              href="#pricing"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Contact
            </a>
          </div>
          <div className="gap-4 flex justify-center items-center">
            {/* Desktop Button */}
            {/* <a
              href="/login"
              className="hidden lg:inline-flex items-center p-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Get started now
            </a> */}
            <a
              
              onClick={() => {
                localStorage.removeItem('token'); 
                window.location.href = '/login'; }}
              className="hidden lg:inline-flex items-center p-2 text-base font-semibold text-white bg-[#1E90FF] rounded-md hover:bg-blue-700"
            >
              Logout
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white lg:hidden focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Menu (Conditional Rendering) */}
        {isMobileMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flex flex-col px-6 space-y-1">
              <a
                href="#"
                className="py-2 text-base font-medium text-black hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#"
                className="py-2 text-base font-medium text-black hover:text-blue-600"
              >
                Solutions
              </a>
              <a
                href="#"
                className="py-2 text-base font-medium text-black hover:text-blue-600"
              >
                Resources
              </a>
              <a
                href="#"
                className="py-2 text-base font-medium text-black hover:text-blue-600"
              >
                Pricing
              </a>
            </div>
            <div className="px-6 mt-6">
              <a
                href="/dashboard"
                className="flex justify-center px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Get started now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
