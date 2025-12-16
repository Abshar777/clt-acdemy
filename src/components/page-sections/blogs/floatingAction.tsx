"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-end">
      
      {/* WhatsApp/Chat Button */}
      <div className="relative group flex items-center gap-2">
         {/* Tooltip */}
        <div className="absolute right-full mr-3 bg-gray-100 text-gray-800 text-xs px-3 py-1.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need Help? <strong>Chat with us</strong>
        </div>

        <button 
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-red-600 text-white p-3 rounded shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Top</span>
        </button>
      )}
    </div>
  );
};