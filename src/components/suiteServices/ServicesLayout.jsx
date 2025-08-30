import React, { useState } from 'react';
import CTASection from './CTASection.jsx';
import ServiceCard from './ServiceCard.jsx';


const ServicesLayout = () => {
  const [activeTab, setActiveTab] = useState('services');

  // Sample data for IT Services
  const itServices = [
    {
      icon: "☁️",
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime."
    },
    {
      icon: "💾",
      title: "IT Infrastructure", 
      description: "Design, build, and manage robust and scalable IT infrastructure."
    },
    {
      icon: "🗄️",
      title: "Data Lake Management",
      description: "Organize and manage your data lakes for powerful analytics and insights."
    },
    {
      icon: "🔧",
      title: "System Maintenance",
      description: "Keep your systems running smoothly with our maintenance services."
    }
  ];

  // Sample data for IT Consulting
  const itConsulting = [
    {
      icon: "💡",
      title: "Strategy Consulting",
      description: "Develop comprehensive IT strategies aligned with your business goals."
    },
    {
      icon: "📊",
      title: "Digital Transformation",
      description: "Transform your business processes with cutting-edge digital solutions."
    },
    {
      icon: "🔒",
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments."
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Optimize your systems and processes for maximum efficiency."
    }
  ];

  const currentServices = activeTab === 'services' ? itServices : itConsulting;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - More Compact */}
        <div className="text-center mb-8">
          <h1 className="text-l sm:text-1xl md:text-2xl lg:text-3xl font-bold text-[#FF8C00] mb-2">
            Our Suite of Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet your cloud and IT needs.
          </p>
        </div>

        {/* Tab Navigation - Responsive Width */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex">
            <button
              onClick={() => setActiveTab('services')}
              className={`flex-1 px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-2 lg:px-16 lg:py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                activeTab === 'services'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              IT Services
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`flex-1 px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-2 lg:px-16 lg:py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                activeTab === 'consulting'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              IT Consulting
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <CTASection />

        {/* Bottom spacing */}
        <div className="mt-16"></div>
        
      </div>
    </div>
  );
};

export default ServicesLayout;