import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ navigate, isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg shadow-amber-500/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-wider text-white cursor-pointer"
          onClick={() => navigate('home')}
        >
          Amen <span className="text-amber-400">Cinematic</span>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => navigate(link.id)} className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              {link.name}
            </button>
          ))}
          <button onClick={() => navigate('book')} className="bg-amber-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
            Book a Session
          </button>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-40 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => navigate(link.id)} className="text-2xl text-gray-300 hover:text-amber-400 transition-colors duration-300">
              {link.name}
            </button>
          ))}
          <button onClick={() => navigate('book')} className="mt-8 bg-amber-400 text-black font-semibold px-8 py-3 rounded-md text-lg hover:bg-amber-300 transition-all duration-300">
            Book a Session
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
