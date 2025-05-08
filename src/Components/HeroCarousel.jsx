// import React, { useState, useEffect } from 'react';

// const HeroCarousel = () => {
//   // Sample images - replace with your actual image URLs
//   const images = [
//     '/slide1.webp',
//     '/slide2.webp',
//     '/slide3.webp',
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto-rotate images every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div id='home' className="relative w-full h-screen max-h-[600px] overflow-hidden">
//       {/* Image carousel */}
//       <div className="relative w-full h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//               index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Content overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black bg-opacity-40">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
//         Designing the Future, Through Smart!
//         </h1>
//         <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
//         Every Brand Has a Story — We Code Yours
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
          
          
//         </div>
//       </div>

//       {/* Carousel indicators */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const images = [
    '/slide1.webp',
    '/slide2.webp',
    '/slide3.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home" className="relative w-full h-screen max-h-[600px] overflow-hidden">
      {/* Carousel Background Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay Content with Funky Transitions */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 animate-slide-in tracking-wide bg-gradient-to-r from-white via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
          Designing the Future, Through Smart!
        </h1>
        <p className="text-lg md:text-2xl text-center max-w-3xl mb-8 text-white/90 animate-zoom-in">
          Every Brand Has a Story — We Code Yours
        </p>
        <button className="mt-4 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 shadow-xl hover:scale-105 transition duration-300 animate-bounce-slow">
          Let’s Build Together 🚀
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full border transition-transform duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-110 shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
