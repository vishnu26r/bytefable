import React from 'react';

const AboutPage = () => {
  return (
    <div id='about' className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Our Tech Solutions</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Delivering premium technical expertise and innovative solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 text-center mb-4">
              We are a team of dedicated tech professionals passionate about providing top-tier technical solutions to both individuals and businesses. With our extensive expertise and commitment to excellence, we've established ourselves as a trusted partner in the tech industry.
            </p>
            <p className="text-gray-700 text-center">
              Our approach combines technical proficiency with personalized service, ensuring that each client receives solutions tailored to their specific needs and goals. We pride ourselves on staying ahead of the technological curve, continuously updating our skills and knowledge to deliver cutting-edge services.
            </p>
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/api/placeholder/600/400" 
              alt="Our workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PC Repair & Optimization</h3>
              <p className="text-gray-700">
                Expert diagnostics and repair services for all computer issues. We optimize performance to ensure your system runs at its best.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design Solutions</h3>
              <p className="text-gray-700">
                Creative and functional designs for websites, applications, and digital products that elevate your brand and enhance user experience.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Software Development</h3>
              <p className="text-gray-700">
                Tailored software solutions designed to address your specific business challenges and streamline operations.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hardware Solutions</h3>
              <p className="text-gray-700">
                Premium hardware upgrades, custom PC builds, and network infrastructure solutions tailored to your requirements.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IT Consultation</h3>
              <p className="text-gray-700">
                Strategic technology planning and advisory services to help you make informed decisions about your tech investments.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Projects</h3>
              <p className="text-gray-700">
                End-to-end project management and implementation for complex technical challenges and innovative solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-3">2+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-3">50+</div>
              <p className="text-gray-700 font-medium">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-3">98%</div>
              <p className="text-gray-700 font-medium">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-3">24/7</div>
              <p className="text-gray-700 font-medium">Technical Support</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Tharun</h3>
                <p className="text-indigo-600 font-medium mb-4">Technical Director</p>
                <p className="text-gray-700">
                  With over 3 years of experience in IT and software development, tharun leads our technical operations.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Vishnuvel</h3>
                <p className="text-indigo-600 font-medium mb-4">Design Lead</p>
                <p className="text-gray-700">
                  Vishnu brings creative vision and UX expertise to ensure our designs are both beautiful and functional.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Faiz Mohammad</h3>
                <p className="text-indigo-600 font-medium mb-4">Hardware Specialist</p>
                <p className="text-gray-700">
                  faiz's detailed knowledge of hardware components ensures optimal performance for all systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-indigo-600 rounded-xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Tech Experience?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our premium services can address your technical needs and help you achieve your goals.
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default AboutPage;