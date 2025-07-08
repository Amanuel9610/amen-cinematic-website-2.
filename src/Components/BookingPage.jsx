const BookingPage = () => {
  // This useEffect hook will add the Calendly script to the document's head.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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