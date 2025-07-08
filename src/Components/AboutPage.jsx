import React from 'react';

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
            <img src="https://placehold.co/800x1000/1a1a1a/f0f0f0?text=Our+Team" alt="Amen Cinematic Team" className="rounded-lg shadow-2xl shadow-amber-500/10 w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
