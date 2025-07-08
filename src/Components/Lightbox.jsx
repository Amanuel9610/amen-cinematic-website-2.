import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If there's no item, don't render anything
  if (!item) {
    return null;
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (item.type === 'gallery') {
        if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrevious();
        }
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Reset currentIndex when the item changes
    setCurrentIndex(0);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  const isGallery = item.type === 'gallery';

  const goToPrevious = () => {
    if (isGallery) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? item.images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (isGallery) {
      const isLastSlide = currentIndex === item.images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  // Handle clicks outside the content to close the lightbox
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    if (isGallery) {
      return <img src={item.images[currentIndex]} alt={`${item.title} - ${currentIndex + 1}`} className="max-w-full max-h-[85vh] object-contain" />;
    }
    if (item.type === 'video') {
      return (
        <div className="aspect-w-16 aspect-h-9 bg-black w-full">
          <iframe
            src={`${item.url}?autoplay=1&rel=0`}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      );
    }
    // Default to single photo
    return <img src={item.url} alt={item.title} className="max-w-full max-h-[85vh] object-contain" />;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-amber-400 z-[110] p-2">
        <X size={40} />
      </button>

      {isGallery && (
        <>
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-[110]">
            <ChevronLeft size={40} />
          </button>
          <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-[110]">
            <ChevronRight size={40} />
          </button>
        </>
      )}

      <div className="relative w-full max-w-6xl h-auto p-4 flex items-center justify-center">
        {renderContent()}
      </div>
      
      {isGallery && (
        <div className="absolute bottom-4 text-white text-lg">
          {currentIndex + 1} / {item.images.length}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
