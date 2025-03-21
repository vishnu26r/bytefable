import React, { useState } from 'react';
import { Home, Wrench, Info, User, Phone } from 'lucide-react';

const BottomNavbar = () => {
  const [showServicesModal, setShowServicesModal] = useState(false);

  const toggleServicesModal = () => {
    setShowServicesModal(!showServicesModal);
  };

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-800 shadow-lg z-50">
        <div className="flex justify-around h-16">
          <a href="home" className="flex flex-col items-center justify-center w-full text-gray-300 hover:text-white hover:bg-slate-700">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </a>
          
          
          <a href="contact" className="flex flex-col items-center justify-center w-full text-blue-400 hover:text-blue-300 hover:bg-slate-700">
            <Phone className="h-6 w-6" />
            <span className="text-xs mt-1">Contact</span>
          </a>

          <a href="about" className="flex flex-col items-center justify-center w-full text-blue-400 hover:text-blue-300 hover:bg-slate-700">
            <Info className="h-6 w-6" />
            <span className="text-xs mt-1">About</span>
          </a>
          
          
          <a href="#" className="flex flex-col items-center justify-center w-full text-gray-300 hover:text-white hover:bg-slate-700">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Account</span>
          </a>
          
          
        </div>
      </div>
      
      {/* Services modal for mobile */}
      {showServicesModal && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-slate-800 w-full rounded-t-xl p-4 pb-20 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-bold">Our Services</h3>
              <button 
                onClick={toggleServicesModal}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600">
                <div className="text-blue-400 text-xl mb-2">💻</div>
                <div className="text-white font-medium">Project Help</div>
              </a>
              
              <a href="#" className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600">
                <div className="text-blue-400 text-xl mb-2">🔧</div>
                <div className="text-white font-medium">Laptop Repair</div>
              </a>
              
              <a href="#" className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600">
                <div className="text-blue-400 text-xl mb-2">🖼️</div>
                <div className="text-white font-medium">Poster Design</div>
              </a>
              
              <a href="#" className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600">
                <div className="text-blue-400 text-xl mb-2">🎨</div>
                <div className="text-white font-medium">Logo Design</div>
              </a>
              
              <a href="#" className="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600">
                <div className="text-blue-400 text-xl mb-2">📱</div>
                <div className="text-white font-medium">UI/UX Design</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;