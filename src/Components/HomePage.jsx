import React from 'react';

const HomePage = ({ navigate }) => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Placeholder for video - a real implementation would use a <video> tag */}
        <img src="https://placehold.co/1920x1080/000000/333333?text=Cinematic+Background" alt="Cinematic background" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-20 p-6 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-4 tracking-tighter" style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.3)' }}>
          Capture Your Story, <br/>Cinematically.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Professional video and photography for weddings, real estate, brands, and events. We create high-quality visuals that inspire, connect, and elevate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => navigate('portfolio')} className="w-full sm:w-auto bg-amber-400 text-black font-bold px-8 py-3 rounded-md text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
            View Portfolio
          </button>
          <button onClick={() => navigate('contact')} className="w-full sm:w-auto border-2 border-amber-400 text-amber-400 font-bold px-8 py-3 rounded-md text-lg hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
