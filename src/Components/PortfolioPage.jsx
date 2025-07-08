import React from 'react';

const PortfolioPage = ({ navigate, services = [] }) => {
  return (
    <div className="py-20 md:py-32 bg-black animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">A collection of our favorite projects. See how we've helped clients tell their stories through stunning visuals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service.id} 
                 className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                 onClick={() => navigate(`service-${service.id}`)}>
              <img src={service.coverImage} alt={service.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white">{service.name}</h3>
                  <span className="mt-2 inline-block text-amber-400 font-semibold">View Gallery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
