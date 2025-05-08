import React, { useEffect } from 'react';
import { Home, Info, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.classList.add("bg-slate-900/90", "shadow-xl");
      } else {
        nav.classList.remove("bg-slate-900/90", "shadow-xl");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-slate-800/70 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo and Brand */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <img className="h-12 w-12" src="/ByteBGrem.png" alt="ByteFable Logo" />
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                  Byte Fable
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/home" className="px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition flex items-center">
                <Info className="h-4 w-4 mr-1" />
                About
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
