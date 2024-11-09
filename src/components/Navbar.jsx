import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md text-gray-800 shadow-md' : 'text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-2xl font-serif">Querido Cuervo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href='#home' className="hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-gray-600 transition-colors">
              Projects
            </a>
            <a href="#footer" className="hover:text-gray-600 transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white text-gray-800 absolute left-0 right-0 shadow-lg">
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Projects
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};