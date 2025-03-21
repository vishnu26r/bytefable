import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">ByteFable</h2>
          <p className="text-sm mt-2 sm-text-center max-w-sm">
            Your trusted partner for  Quality and innovation.
         
          <p className="text-sm mt-2">Services: Laptop Repair | Web Design | Logo Design | Poster Design | UI/UX Design</p>
          <p className="text-sm mt-1">Projects: Hardware | Software | AI & ML</p>
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition duration-300">Home</a>
          <a href="#" className="hover:text-white transition duration-300">Contact</a>
        </div>
        
        {/* Social Icons & Contact */}
        <div className="flex flex-col gap-4 mt-6 md:mt-0 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Instagram className="text-white w-6 h-6" />
            <a href="https://www.instagram.com/your_instagram_id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              @your_instagram_id
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-white w-6 h-6" />
            <a href="mailto:your_email@example.com" className="hover:text-white transition duration-300">
              your_email@example.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} ByteFixers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;