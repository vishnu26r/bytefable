// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Mail, Instagram, Clock, Send } from 'lucide-react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const templateParams = {
//       from_name: formData.name,
//       email: formData.email,
//       message: formData.message,
//     };

//     try {
//       await emailjs.send(
//         'service_4gkzepm',    // Service ID
//         'template_6qk58nf',   // Template ID
//         templateParams,
//         'so891Mf95XI3h4bEJ'   // Public Key
//       );
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Email send error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSubmitStatus(null), 3000);
//     }
//   };

//   return (
//     <div id='contact' className="w-full min-h-screen bg-gray-900 text-white px-4 py-12 flex justify-center items-center">
//       <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-xl shadow-xl transition-all hover:shadow-2xl">
//         <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
//           Contact Us
//         </h1>

//         <div className="space-y-6">
//           {/* Email */}
//           <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
//             <Mail className="text-blue-400" />
//             <p className="text-lg">bytefixers2024@gmail.com</p>
//           </div>

//           {/* Instagram */}
//           <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
//             <Instagram className="text-pink-400" />
//             <p className="text-lg">@bytefixers</p>
//           </div>

//           {/* Business Hours */}
//           <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
//             <Clock className="text-green-400" />
//             <p className="text-lg">Mon - Fri: 9 AM - 6 PM</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} className="mt-8 space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
//             required
//           />

//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows="4"
//             className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all"
//           >
//             {isSubmitting ? <span>Sending...</span> : <><span>Send Message</span><Send className="ml-2" /></>}
//           </button>
//         </form>

//         {/* Submission Status */}
//         {submitStatus === 'success' && <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>}
//         {submitStatus === 'error' && <p className="text-red-400 mt-4 text-center">Something went wrong. Try again.</p>}
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Instagram, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_4gkzepm',
        'template_6qk58nf',
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'so891Mf95XI3h4bEJ'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full bg-[#f9fafb] text-gray-800 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 md:p-10">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-10">Contact Us</h1>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center gap-2">
            <Mail className="text-blue-500" />
            <p className="text-sm text-gray-700">bytefixers2024@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Instagram className="text-pink-500" />
            <p className="text-sm text-gray-700">@bytefixers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="text-green-500" />
            <p className="text-sm text-gray-700">Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-3 px-4 rounded-md flex justify-center items-center"
          >
            {isSubmitting ? "Sending..." : (
              <>
                <span>Send Message</span>
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Status Message */}
        {submitStatus === 'success' && (
          <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
