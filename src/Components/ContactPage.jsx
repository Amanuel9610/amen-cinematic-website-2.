import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

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

const ContactPage = ({ services = [] }) => {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('Please fill in all required fields.');
            return;
        }
        setFormStatus('Submitting...');
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
                  {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
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
                        <a href="mailto:hello@amencinematic.com" className="text-gray-300 hover:text-amber-400">hello@amencinematic.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-amber-400" />
                        <a href="tel:+1234567890" className="text-gray-300 hover:text-amber-400">(123) 456-7890</a>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                        <span className="text-gray-300">123 Cinematic Ave, Suite 100<br/>Hollywood, CA 90028</span>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><Instagram size={32} /></a>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><Youtube size={32} /></a>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><TiktokIcon className="w-8 h-8" /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
