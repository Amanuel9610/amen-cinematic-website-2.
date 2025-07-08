import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

// You'll need to create this TiktokIcon component in a separate file or within this one
const TiktokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.6 5.82s.51.5 0 0A4.27 4.27 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.59A2.59 2.59 0 0 1 7.27 18V5.82s-.51-.5 0 0A4.27 4.27 0 0 1 8.33 3h3.09v7.4a2.59 2.59 0 0 1-2.59 2.59A2.59 2.59 0 0 1 6.25 13V3" />
  </svg>
);

const Footer = ({ navigate }) => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Amen <span className="text-amber-400">Cinematic</span></h3>
            <p className="text-gray-400">Cinematic storytelling for life's most important moments.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-amber-400 transition-colors"><Youtube size={24} /></a>
              <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-amber-400 transition-colors"><TiktokIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('about')} className="text-gray-400 hover:text-amber-400">About Us</button></li>
              <li><button onClick={() => navigate('portfolio')} className="text-gray-400 hover:text-amber-400">Portfolio</button></li>
              <li><button onClick={() => navigate('services')} className="text-gray-400 hover:text-amber-400">Services</button></li>
              <li><button onClick={() => navigate('contact')} className="text-gray-400 hover:text-amber-400">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Get a Free Consultation</h4>
            <p className="text-gray-400 mb-4">Ready to tell your story? Let's talk.</p>
            <button onClick={() => navigate('book')} className="bg-amber-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-amber-300 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Amen Cinematic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
