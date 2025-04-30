import React, { useState } from 'react';
import { ArrowRight, Link, X } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Laptop Service',
      description: 'Professional laptop repair, maintenance and upgrade services to keep your device running smoothly.',
      details: 'Our comprehensive laptop service includes diagnostics, hardware repairs, component upgrades, screen replacements, keyboard replacements, battery replacements, and performance optimization. We work with all major brands including Dell, HP, Lenovo, Apple, Asus, and more. Our certified technicians use only high-quality replacement parts to ensure the longevity of your device.',
      image: '/laptop service.jpg', // Add your image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Operating Systems',
      description: 'Expert installation and configuration of Windows and Linux operating systems tailored to your needs.',
      details: 'We provide professional installation, configuration, and optimization of various operating systems including Windows 10/11 and Linux distributions (Ubuntu, Fedora, Debian, CentOS, etc.). Our services include clean installations, system migrations, dual-boot setups, virtual machine configurations, system hardening for security, performance tuning, and driver installations for maximum compatibility with your hardware.',
      image: '/os.jpg', // Add your image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Software Projects',
      description: 'Custom software development solutions built with the latest technologies to solve your business challenges.',
      details: 'Our software development team creates bespoke applications tailored to your specific business needs. We specialize in web applications, mobile apps, desktop software, e-commerce platforms, content management systems, and enterprise solutions. Our development stack includes React, Angular, Vue.js, Node.js, Python, Java, and .NET. We follow agile methodologies to ensure timely delivery and continuous improvement of your software products.',
      image: '/software.jpg', // Add your image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Hardware Projects',
      description: 'Innovative hardware solutions and prototypes designed and built to match your specifications.',
      details: 'We design and build custom hardware solutions including embedded systems, IoT devices, sensor networks, automation systems, robotics projects, and electronic prototypes. Our team has expertise in microcontrollers (Arduino, Raspberry Pi, ESP32), PCB design, 3D printing, and systems integration. We can take your hardware project from concept through prototyping to final production-ready designs.',
      image: '/hardware.jpg', // Add your image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Design Services',
      description: 'Professional logo design, poster creation, and UI/UX design services to elevate your brand.',
      details: 'Our design team delivers professional visual assets including brand identity (logos, color schemes, typography), marketing materials (posters, flyers, brochures), UI/UX design for web and mobile applications, packaging design, social media graphics, and digital illustrations. We focus on creating designs that are not only visually appealing but also strategically aligned with your business goals and target audience preferences.',
      image: '/designs.jpg', // Add your image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'AI & ML Projects',
      description: 'Cutting-edge artificial intelligence and machine learning solutions for intelligent business applications.',
      details: 'We develop advanced AI and ML solutions including predictive analytics, natural language processing, computer vision systems, recommendation engines, chatbots, and data mining applications. Our team utilizes technologies such as TensorFlow, PyTorch, scikit-learn, and cloud-based AI services to create intelligent systems that can automate processes, extract insights from your data, and provide competitive advantages for your business.',
      image: '/aiml.jpg', // Add your image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const openServiceDetails = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Premium Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-64 bg-indigo-100 flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-500">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => openServiceDetails(service)}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeServiceDetails}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={closeServiceDetails}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="bg-indigo-100 h-64 -mx-4 -mt-5 sm:-mx-6 sm:rounded-t-lg overflow-hidden">
                      <img 
                        src={selectedService.image} 
                        alt={selectedService.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        {selectedService.icon}
                      </div>
                      <h3 className="ml-3 text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                        {selectedService.title}
                      </h3>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {selectedService.details}
                      </p>
                      
                      <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                        <h4 className="font-semibold text-indigo-800 mb-2">Why Choose Our {selectedService.title}?</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Expert team with years of experience</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Cutting-edge technologies and methodologies</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">Customized solutions tailored to your specific needs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 gap-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <a href="/contact" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300">
                  Contact us
                  </a>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeServiceDetails}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;