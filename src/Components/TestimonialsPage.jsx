import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsPage = ({ testimonials = [] }) => {
  return (
    <div className="py-20 md:py-32 bg-gray-900/50 animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">We are proud to have worked with amazing clients. Here's what they think about their experience with Amen Cinematic.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
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

export default TestimonialsPage;
