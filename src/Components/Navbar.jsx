import React, { useState } from 'react';
import { Menu, X, Laptop, Wrench, Home, Info, Phone, User, Mail, Settings, LogOut } from 'lucide-react';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleSlidePanel = () => {
    setIsSlidePanelOpen(!isSlidePanelOpen);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
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
              
              {/* User icon on desktop */}
              <button 
                onClick={toggleSlidePanel}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 flex items-center"
              >
                <User className="h-4 w-4 mr-1" />
                Account
              </button>
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
      
      {/* Slide-in panel for user details */}
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-slate-900 shadow-xl transform ${isSlidePanelOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          {/* Close button */}
          <button 
            onClick={toggleSlidePanel}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* User profile section */}
          <div className="flex flex-col items-center mb-8 mt-4">
            <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
              JS
            </div>
            <h3 className="text-lg font-bold text-white">John Student</h3>
            <p className="text-gray-400">john.student@example.com</p>
            <div className="mt-2 px-3 py-1 bg-green-600 text-white text-xs rounded-full">
              Premium Member
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="space-y-2">
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <User className="h-5 w-5 mr-3 text-blue-400" />
              My Profile
            </a>
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Wrench className="h-5 w-5 mr-3 text-blue-400" />
              My Services
            </a>
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Mail className="h-5 w-5 mr-3 text-blue-400" />
              Messages
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
            </a>
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Settings className="h-5 w-5 mr-3 text-blue-400" />
              Settings
            </a>
          </div>
          
          {/* Mobile-only navigation links */}
          <div className="md:hidden space-y-2 mt-6 border-t border-slate-700 pt-6">
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Home className="h-5 w-5 mr-3 text-blue-400" />
              Home
            </a>
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Info className="h-5 w-5 mr-3 text-blue-400" />
              About
            </a>
            <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
              <Phone className="h-5 w-5 mr-3 text-blue-400" />
              Contact
            </a>
          </div>
          
          {/* Divider */}
          <div className="border-t border-slate-700 my-6"></div>
          
          {/* Logout button */}
          <a href="#" className="block px-4 py-2 rounded-md text-white hover:bg-slate-700 flex items-center">
            <LogOut className="h-5 w-5 mr-3 text-red-400" />
            Log Out
          </a>
          
          {/* Quick service access section */}
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-400 mb-4">QUICK ACCESS</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700">
                <div className="text-blue-400 text-lg mb-1">💻</div>
                <div className="text-white text-xs">Projects</div>
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700">
                <div className="text-blue-400 text-lg mb-1">🔧</div>
                <div className="text-white text-xs">Repair</div>
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700">
                <div className="text-blue-400 text-lg mb-1">🎨</div>
                <div className="text-white text-xs">Design</div>
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-700">
                <div className="text-blue-400 text-lg mb-1">📱</div>
                <div className="text-white text-xs">UI/UX</div>
              </a>
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