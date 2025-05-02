import { Instagram, Mail,Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Tech Solutions</h3>
          <p className="mb-4">Providing premium technical services and innovative solutions.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li>PC Repair & Optimization</li>
            <li>Design Solutions</li>
            <li>Software Development</li>
            <li>Hardware Solutions</li>
            <li>IT Consultation</li>
            <li>Custom Projects</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <a href="mailto:contact@techsolutions.com"><li> bytefixers2024@gmail.com</li></a>
            <div className="flex gap-3">
            <a href="https://www.instagram.com/bytefable.tech?igsh=MWhmOW5jcXB0Z2xxNQ=="  target="_blank" className="text-gray-300 hover:text-white">
              <Instagram size={24} />
            </a>
            <li>bytefable.tech</li>
            </div>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="mailto:contact@techsolutions.com" className="text-gray-300 hover:text-white">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/bytefable.tech?igsh=MWhmOW5jcXB0Z2xxNQ=="  target="_blank" className="text-gray-300 hover:text-white">
              <Instagram size={24} />
            </a>
            
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin size={24}/>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-10 ">
        <hr />
      </div>
      <div className="border-t border-gray-800 mb-8 pt-8 text-center">
        <p>&copy; 2025 Tech Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;