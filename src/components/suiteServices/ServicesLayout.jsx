import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CTASection from './CTASection.jsx';
import ServiceCard from './ServiceCard.jsx';
import { categories, contentData } from '../Navbar/data.js';

const ServicesLayout = () => {
  const [activeTab, setActiveTab] = useState(() => {
    // Initialize from localStorage or default to 'ai-data'
    return localStorage.getItem('servicesActiveTab') || 'ai-data';
  });
  const navigate = useNavigate();

  // Persist activeTab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('servicesActiveTab', activeTab);
  }, [activeTab]);

  // Get categories from data.js
  const aiDataServices = categories.find(cat => cat.name === 'AI and Data Services')?.items || [];
  const staffingServices = categories.find(cat => cat.name === 'Staffing and Consulting Services')?.items || [];
  const digitalMarketing = categories.find(cat => cat.name === 'Digital Marketing Services')?.items || [];

  const currentServices = 
    activeTab === 'ai-data' ? aiDataServices : 
    activeTab === 'staffing' ? staffingServices :
    activeTab === 'marketing' ? digitalMarketing : [];

  return (
    <div id="services-section" className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - More Compact */}
        <div className="text-center mb-8">
          <h1 className="text-l sm:text-1xl md:text-2xl lg:text-3xl font-bold text-[#FF8C00] mb-2">
            Our Service Portfolio
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-1xl mx-auto">
            We provide end to end IT and Cloud Solutions designed to support and scale your business
          </p>
        </div>

        {/* Tab Navigation - Responsive Width */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-5xl flex">
            <button
              onClick={() => setActiveTab('ai-data')}
              className={`flex-1 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'ai-data'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Software 
            </button>
            <button
              onClick={() => setActiveTab('staffing')}
              className={`flex-1 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'staffing'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              IT Staffing
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`flex-1 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'marketing'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Digital Marketing
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {currentServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.name}
              description={contentData[service.name]?.description || ''}
              buttonText={contentData[service.name]?.buttonText || 'Read More'}
              onReadMore={() => {
                const endpoint = contentData[service.name]?.navigationEndpoint;
                if (endpoint) navigate(endpoint);
              }}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto">
          <CTASection />
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
        
      </div>
    </div>
  );
};

export default ServicesLayout;