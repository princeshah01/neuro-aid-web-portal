import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ scroll }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        scroll ? "backdrop-blur-sm" : "bg-transparent"
      } z-50`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center -space-x-[3.3rem]">
            <div className="w-[4.5rem] h-10 p-2 bg-healthcare-blue rounded-full flex items-center justify-start">
              <span className="font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              umor Track
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-healthcare-blue transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-healthcare-blue transition-colors"
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1 rounded-md bg-white">
                  <Link
                    to="/services/tumor-classifier"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-healthcare-soft-blue"
                  >
                    Tumor Classifier
                  </Link>
                  <Link
                    to="/services/chat-with-pdf"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-healthcare-soft-blue"
                  >
                    Chat with PDF
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-healthcare-blue transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-healthcare-blue transition-colors"
            >
              Contact
            </Link>

            <div></div>
            <div></div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-healthcare-soft-blue rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <button
              className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-healthcare-soft-blue rounded-md"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isServicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesDropdownOpen && (
              <div className="pl-6 space-y-1 animate-fade-in">
                <Link
                  to="/services/tumor-classifier"
                  className="block px-3 py-2 text-gray-700 hover:bg-healthcare-soft-blue rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tumor Classifier
                </Link>
                <Link
                  to="/services/chat-with-pdf"
                  className="block px-3 py-2 text-gray-700 hover:bg-healthcare-soft-blue rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chat with PDF
                </Link>
              </div>
            )}

            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-healthcare-soft-blue rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:bg-healthcare-soft-blue rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-2"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
