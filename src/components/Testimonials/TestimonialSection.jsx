import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard.jsx';
import StatsSection from './StatsSection.jsx';
import dummyTestimonialImage from '../../assets/testimonial_dummy.svg';
import testimonialsData from './testimonials.json';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const timeoutRef = useRef();

  // Map imageSrc string to actual import
  const testimonials = testimonialsData.map(t => ({
    ...t,
    imageSrc: dummyTestimonialImage
  }));

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDirection('next');
      setCurrentIndex(prevIndex =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, testimonials.length]);

  const nextTestimonial = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
  <>
    <section className="bg-gray-50 pb-4 " id='testimonials'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 py-10">
          <h1 className="text-l sm:text-1xl md:text-2xl lg:text-3xl font-bold text-[#FF8C00] mb-2">
            What Our Clients Say
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide to deliver exceptional IT 
            solutions and transformative results
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-6xl mx-auto min-h-[340px]">
          <div
            className={`transition-transform duration-700 ease-in-out ${direction === 'next' ? 'animate-slide-left' : 'animate-slide-right'}`}
            key={currentIndex}
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'next' : 'prev');
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#FF8C00] opacity-70' : 'bg-gray-300 opacity-50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.7s;
        }
        .animate-slide-right {
          animation: slideRight 0.7s;
        }
      `}</style>
    </section>
    <StatsSection />
    </>
  );
};
export default TestimonialSection;
