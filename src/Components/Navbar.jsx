import React, { useState } from 'react';
import { Menu, X, Laptop, Wrench, Home, Info, Phone, Mail, Settings, LogOut } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);

  const toggleSlidePanel = () => {
    setIsSlidePanelOpen(!isSlidePanelOpen);
  };

  return (
    <>
      <nav className="bg-slate-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and brand name */}
            <div className="flex-shrink-0 flex items-center">
              <Laptop className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ByteFable</span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 flex items-center">
                <Info className="h-4 w-4 mr-1" />
                About
              </Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleSlidePanel}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Slide-in panel for mobile menu */}
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-slate-900 shadow-xl transform ${isSlidePanelOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          {/* Close button */}
          <button 
            onClick={toggleSlidePanel}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Mobile navigation links */}
          <div className="space-y-4 mt-10">
            <Link to="/home" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Home className="h-5 w-5 mr-3 text-blue-400" />
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Info className="h-5 w-5 mr-3 text-blue-400" />
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Phone className="h-5 w-5 mr-3 text-blue-400" />
              Contact
            </Link>
            <Link to="/services" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Wrench className="h-5 w-5 mr-3 text-blue-400" />
              Services
            </Link>
            
            {/* Slogan at the bottom */}
          <div className="mt-10 text-center text-gray-400 text-sm border-t border-slate-700 pt-4">
            "Innovating Tomorrow, One Byte at a Time."
          </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when slide panel is open */}
      {isSlidePanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSlidePanel}
        ></div>
      )}
    </>
  );
};

export default Navbar;
