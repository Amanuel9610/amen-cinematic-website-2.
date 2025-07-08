import React from 'react';
import { Camera, Video, Building, Gift } from 'lucide-react';

const ServicesPage = ({ navigate, services = [] }) => {
  return (
    <div className="py-20 md:py-32 bg-gray-900/50 animate-fadeIn">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">We offer a range of professional production services tailored to your needs. Explore how we can bring your vision to life.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div key={service.id} 
                 className="bg-black p-8 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                 onClick={() => navigate(`service-${service.id}`)}>
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon && React.cloneElement(service.icon, { className: "w-12 h-12 mx-auto text-amber-400" })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <span className="font-semibold text-amber-400 group-hover:underline">Learn More &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
