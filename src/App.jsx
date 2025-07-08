
import React, { useState, useEffect } from 'react';
import { Camera, Video, Building, Gift, Star, Mail, Phone, MapPin, Instagram, Youtube, Menu, X } from 'lucide-react';

// Custom TikTok Icon Component
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


// Mock Data (replace with actual data from a CMS or API)
const mockData = {
  services: [
    { id: 'weddings', name: 'Weddings', icon: <Video className="w-12 h-12 mx-auto text-amber-400" />, description: 'Crafting timeless cinematic wedding films that tell your unique love story with emotion and artistry.', coverImage: '/JPEG/FZ2A8690.jpg' },
    { id: 'real-estate', name: 'Real Estate', icon: <Building className="w-12 h-12 mx-auto text-amber-400" />, description: 'Elevating property listings with stunning photography and captivating video tours that attract buyers.', coverImage: '/JPEG/222.png' },
    { id: 'brand-content', name: 'Brand Content', icon: <Camera className="w-12 h-12 mx-auto text-amber-400" />, description: 'Creating compelling brand stories and promotional content that resonates with your audience and drives engagement.', coverImage: '/JPEG/12121_2.8.1.jpg' },
    { id: 'events', name: 'Event Photography', icon: <Gift className="w-12 h-12 mx-auto text-amber-400" />, description: 'Capturing the energy and key moments of your corporate events, conferences, and special occasions.', coverImage: '/JPEG/image.png' },
  ],
  portfolio: {
    weddings: [
      { id: 1, type: 'video', url: '/Black 6k pro023_09050645_C003_2.mp4', thumb: '/JPEG/DSC02868.jpg', title: 'Kalkidan' },
      { id: 2, type: 'photo', url: '/JPEG/FZ2A8738.jpg', thumb: '/JPEG/FZ2A8738.jpg', title: 'Elegant Ceremony' },
      { id: 3, type: 'photo', url: '/JPEG/FZ2A8812.jpg', thumb: '/JPEG/FZ2A8812.jpg', title: 'Golden Hour Kiss' },
      { id: 4, type: 'video', url: '/Black 6k pro023_09050645_C003_2.mp4', thumb: '/Black 6k pro023_09050645_C003_2.mp4text=Wedding+Video+2', title: 'Jessica & Mike' },
      { id: 5, type: 'photo', url: '/JPEG/FZ2A9581.jpg', thumb: '/JPEG/FZ2A9581.jpg', title: 'Golden Hour Kiss' },
    ],
    'real-estate': [
      { id: 1, type: 'photo', url: '/JPEG/4.png', thumb: '/JPEG/4.png', title: 'Modern Luxury Villa' },
      { id: 2, type: 'video', url: 'https://www.youtube.com/embed/Y_plhk1tZ_U', thumb: 'https://placehold.co/600x400/000000/ffffff?text=Property+Tour', title: 'Downtown Penthouse Tour' },
      { id: 3, type: 'photo', url: 'https://placehold.co/800x600/2a2a2a/f0f0f0?text=Cozy+Interior', thumb: 'https://placehold.co/600x400/2a2a2a/f0f0f0?text=Cozy+Interior', title: 'Cozy Family Home' },
    ],
    'brand-content': [
      { id: 1, type: 'video', url: 'https://www.youtube.com/embed/v3_pLObI4-M', thumb: 'https://placehold.co/600x400/000000/ffffff?text=Brand+Ad', title: 'Artisan Coffee Roasters' },
      { id: 2, type: 'photo', url: 'https://placehold.co/800x600/1a1a1a/f0f0f0?text=Product+Shot', thumb: 'https://placehold.co/600x400/1a1a1a/f0f0f0?text=Product+Shot', title: 'Handcrafted Leather Goods' },
    ],
    events: [
        { id: 1, type: 'photo', url: 'https://placehold.co/800x600/1a1a1a/f0f0f0?text=Conference', thumb: 'https://placehold.co/600x400/1a1a1a/f0f0f0?text=Conference', title: 'Tech Summit 2025' },
        { id: 2, type: 'photo', url: 'https://placehold.co/800x600/2a2a2a/f0f0f0?text=Gala', thumb: 'https://placehold.co/600x400/2a2a2a/f0f0f0?text=Gala', title: 'Charity Gala Dinner' },
    ],
  },
  testimonials: [
    { id: 1, name: 'Sarah & Tom', quote: 'Amen Cinematic captured our wedding day perfectly. The film is a masterpiece we will cherish forever. Their professionalism and artistic vision are unmatched.', service: 'Wedding Film' },
    { id: 2, name: 'Prime Properties Inc.', quote: 'The real estate videos have significantly boosted our sales. The quality is exceptional and truly showcases the properties in their best light.', service: 'Real Estate Videography' },
    { id: 3, name: 'Aura Apparel', quote: 'The brand video they produced was exactly what we needed. It was stylish, engaging, and perfectly captured our brand\'s essence. Highly recommended!', service: 'Brand Content' },
  ]
};

// Main App Component
export default function App() {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);

  const navigate = (newPage) => {
    setPage(newPage);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openLightbox = (item) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };
  
  // Effect to handle body scroll lock when lightbox is open
  useEffect(() => {
    if (lightboxItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxItem]);


  const renderPage = () => {
    // Extract service page ID if applicable
   const servicePageId = page.startsWith('service-') ? page.substring('service-'.length) : null;

    switch (page) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      case 'services':
        return <ServicesPage navigate={navigate} />;
      case 'portfolio':
        return <PortfolioPage navigate={navigate} />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      case 'book':
        return <BookingPage />;
      default:
        if (servicePageId) {
          const service = mockData.services.find(s => s.id === servicePageId);
          const portfolioItems = mockData.portfolio[servicePageId] || [];
          return <ServiceDetailPage service={service} portfolio={portfolioItems} navigate={navigate} openLightbox={openLightbox} />;
        }
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="bg-black text-gray-200 font-sans antialiased">
      <Header navigate={navigate} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-20"> {/* Padding to offset fixed header */}
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      {lightboxItem && <Lightbox item={lightboxItem} onClose={closeLightbox} />}
    </div>
  );
}

// Header Component
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

// Home Page Component
const HomePage = ({ navigate }) => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Placeholder for video - a real implementation would use a <video> tag */}
       
<img src="/JPEG/Untitled_2.6.1.jpg" alt="Cinematic background" className="w-full h-full object-cover" />
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

// About Page Component
const AboutPage = ({ navigate }) => {
  return (
    <div className="py-20 md:py-32 bg-black animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">About <span className="text-amber-400">Amen Cinematic</span></h2>
            <p className="text-lg text-gray-300">
              Amen Cinematic is more than just a production studio; we are passionate storytellers dedicated to capturing life's most important moments with cinematic precision and artistry. Founded on the belief that every story deserves to be told beautifully, our team brings a wealth of experience and a creative eye to every project.
            </p>
            <p className="text-gray-400">
              From the intimate moments of a wedding day to the grand scale of a corporate event, we blend technical expertise with a deep understanding of narrative. Our mission is to create high-quality videos and photos that not only document but also inspire, connect, and elevate our clients’ stories, leaving a lasting impact.
            </p>
            <div className="pt-4">
              <button onClick={() => navigate('contact')} className="bg-amber-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
                Work With Us
              </button>
            </div>
          </div>
          <div>
            <img src="/JPEG/FZ2A0717.jpg" alt="Amen Cinematic Team" className="rounded-lg shadow-2xl shadow-amber-500/10 w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Page Component
const ServicesPage = ({ navigate }) => {
  return (
    <div className="py-20 md:py-32 bg-gray-900/50 animate-fadeIn">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">We offer a range of professional production services tailored to your needs. Explore how we can bring your vision to life.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.services.map(service => (
            <div key={service.id} 
                 className="bg-black p-8 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                 onClick={() => navigate(`service-${service.id}`)}>
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
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

// Portfolio Overview Page
const PortfolioPage = ({ navigate }) => {
  return (
    <div className="py-20 md:py-32 bg-black animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">A collection of our favorite projects. See how we've helped clients tell their stories through stunning visuals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {mockData.services.map(service => (
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

// Generic Service Detail Page Component
const ServiceDetailPage = ({ service, portfolio, navigate, openLightbox }) => {
  if (!service) return <div>Service not found.</div>;

  return (
    <div className="py-20 md:py-28 bg-black animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] rounded-lg overflow-hidden flex items-center justify-center text-center mb-20"
             style={{ backgroundImage: `url(${service.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white">{service.name}</h1>
          </div>
        </div>

        {/* Description and Booking */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold text-white">Cinematic {service.name} Production</h2>
            <p className="text-lg text-gray-300">{service.description}</p>
            <p className="text-gray-400">We approach every {service.name.toLowerCase()} project with a storyteller's mindset. Our goal is to create visuals that are not only beautiful but also meaningful and impactful. We use state-of-the-art equipment and creative techniques to ensure the highest quality results.</p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
            <p className="text-gray-400 mb-6">Let's discuss your project and how we can bring your vision to life.</p>
            <button onClick={() => navigate('book')} className="w-full bg-amber-400 text-black font-bold px-8 py-3 rounded-md text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
              Book Your Session
            </button>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolio.map(item => (
            <div key={item.id} className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg" onClick={() => openLightbox(item)}>
              <img src={item.thumb} alt={item.title} className="w-full h-90 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  {item.type === 'video' && <Video className="w-12 h-12 mx-auto mb-2" />}
                  {item.type === 'photo' && <Camera className="w-12 h-12 mx-auto mb-2" />}
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Page Component
const TestimonialsPage = () => {
  return (
    <div className="py-20 md:py-32 bg-gray-900/50 animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">We are proud to have worked with amazing clients. Here's what they think about their experience with Amen Cinematic.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-black p-8 rounded-lg shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-amber-400">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('Please fill in all required fields.');
            return;
        }
        setFormStatus('Submitting...');
        // Mock submission
        setTimeout(() => {
            setFormStatus('Thank you for your message! We will get back to you shortly.');
            setFormData({ name: '', email: '', service: '', message: '' });
        }, 1500);
    };

  return (
    <div className="py-20 md:py-32 bg-black animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Have a question or ready to start your project? Send us a message or book a consultation directly.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 text-white rounded-md border-gray-700 focus:ring-amber-400 focus:border-amber-400" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 text-white rounded-md border-gray-700 focus:ring-amber-400 focus:border-amber-400" required />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service of Interest</label>
                <select name="service" id="service" value={formData.service} onChange={handleChange} className="w-full bg-gray-800 text-white rounded-md border-gray-700 focus:ring-amber-400 focus:border-amber-400">
                  <option value="">Select a service</option>
                  {mockData.services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full bg-gray-800 text-white rounded-md border-gray-700 focus:ring-amber-400 focus:border-amber-400" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-amber-400 text-black font-bold px-8 py-3 rounded-md text-lg hover:bg-amber-300 transition-all duration-300">
                  Send Inquiry
                </button>
              </div>
              {formStatus && <p className="text-center text-amber-300 mt-4">{formStatus}</p>}
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4 text-lg">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-amber-400" />
                        <a href="mailto:hello@amencinematic.com" className="text-gray-300 hover:text-amber-400">aman12003@yahoo.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-amber-400" />
                        <a href="tel:+1234567890" className="text-gray-300 hover:text-amber-400">(+46) 733574395</a>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                        <span className="text-gray-300">Stockholm<br/>,Sweden</span>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                   <a href="https://www.instagram.com/amen_cinematic?igsh=MXJ2czlkbnN3dzh4Nw%3D%3D&utm_source=qr" className="text-gray-400 hover:text-amber-400 transition-colors"><Instagram size={32} /></a>
                    <a href="https://www.youtube.com/channel/your_channel" className="text-gray-400 hover:text-amber-400 transition-colors"><Youtube size={32} /></a>
                    <a href="https://www.tiktok.com/@your_username" className="text-gray-400 hover:text-amber-400 transition-colors"><TiktokIcon className="w-8 h-8" /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Booking Page Component
const BookingPage = () => {
  // This useEffect hook will add the Calendly script to the document's head.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-20 md:py-32 bg-black animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book a Session</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Schedule a free consultation or book your production date directly.</p>
        </div>
        <div className="max-w-5xl mx-auto bg-gray-900/50 p-2 md:p-4 rounded-lg shadow-lg">
          {/* Calendly inline widget begin */}
          <div 
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/amanjc12003" 
            style={{ minWidth: '320px', height: '700px' }}
          >
          </div>
          {/* Calendly inline widget end */}
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ navigate }) => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Amen <span className="text-amber-400">Cinematic</span></h3>
            <p className="text-gray-400">Cinematic storytelling for life's most important moments.</p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/your_username" aria-label="Instagram" className="text-gray-400 hover:text-amber-400 transition-colors"><Instagram size={24} /></a>
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

// Lightbox Component
const Lightbox = ({ item, onClose }) => {
  // Handle clicks outside the content to close the lightbox
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-amber-400 z-[110]">
        <X size={40} />
      </button>
      <div className="relative w-full max-w-5xl h-auto max-h-[90vh] p-4">
        {item.type === 'video' ? (
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <iframe
              src={`${item.url}?autoplay=1&rel=0`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : (
          <img src={item.url} alt={item.title} className="w-full h-full object-contain" />
        )}
      </div>
    </div>
  );
};

// Add some basic CSS for animations and aspect ratio (Tailwind plugins might not be available)
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }
  .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
  .aspect-h-9 { height: 0; }
  .aspect-w-16 > * { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
`;
document.head.appendChild(style);
