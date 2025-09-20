
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard.jsx';
import StatsSection from './StatsSection.jsx';
import dummyTestimonialImage from '../../assets/testimonial_dummy.svg'

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      rating: 5,
      timeAgo: "5 months ago",
      testimonial: "TechConsult Pro transformed our entire IT infrastructure in just 6 months. Their expertise in cloud migration and cybersecurity is unmatched. We've seen a 40% increase in operational efficiency.",
      clientName: "Sarah Johnson",
      clientTitle: "CTO",
      company: "InnovateCore Solutions",
      projectValue: "$2.5M",
      imageSrc: dummyTestimonialImage
    },
    {
      rating: 5,
      timeAgo: "3 months ago",
      testimonial: "Outstanding service delivery and technical expertise. The team went above and beyond to ensure our digital transformation was seamless and efficient.",
      clientName: "Michael Chen",
      clientTitle: "CEO",
      company: "Digital Dynamics Inc",
      projectValue: "$1.8M",
      imageSrc: dummyTestimonialImage
    },
    {
      rating: 5,
      timeAgo: "7 months ago",
      testimonial: "Their cloud migration strategy saved us millions in operational costs while improving our system performance significantly. Highly recommended!",
      clientName: "Emily Rodriguez",
      clientTitle: "CTO",
      company: "Future Tech Solutions",
      projectValue: "$3.2M",
      imageSrc: dummyTestimonialImage
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
  <>
    <section className="bg-gray-50 pb-4 ">
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
        <div className="relative max-w-6xl mx-auto">
          <TestimonialCard {...testimonials[currentIndex]} />
          
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
                  onClick={() => setCurrentIndex(index)}
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
    </section>
    <StatsSection />
    </>
  );
};
export default TestimonialSection;
