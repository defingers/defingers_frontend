import React from 'react';
import IndustryCard from './IndustryCard';
import domainsGroupImage from '../../assets/domains_group_image.png';
const IndustriesSection = () => {
  const industriesData = [
    {
      id: 1,
      icon: "💰",
      title: "Finance & Banking",
      description: "We deliver secure, compliant and scalable digital platforms for financial institutions."
    },
    {
      id: 2,
      icon: "🏥",
      title: "Healthcare",
      description: "Advanced healthcare solutions that improve patient care and operational efficiency."
    },
    {
      id: 3,
      icon: "🛒",
      title: "E-commerce",
      description: "Robust e-commerce platforms that drive sales and enhance customer experience."
    },
    {
      id: 4,
      icon: "🏭",
      title: "Manufacturing",
      description: "Smart manufacturing solutions that optimize production and reduce costs."
    },
    {
      id: 5,
      icon: "📚",
      title: "Education",
      description: "Digital learning platforms that transform educational experiences."
    },
    {
      id: 6,
      icon: "🚚",
      title: "Logistics",
      description: "Streamlined logistics solutions that improve supply chain efficiency."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image and Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg">
              {/* Business domains illustration */}
              <div className=" rounded-2xl p-4 flex items-center justify-center">
                <img 
                  src={domainsGroupImage} 
                  alt="Business domains and industries we serve" 
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF8C00]  mb-4">
                Industries we Empowered In
              </h2>
              <p className="text-gray-700 text-base sm:text-lg max-w-2xl">
                We provide tailored solutions across a diverse range of sectors, 
                helping businesses innovate and thrive.
              </p>
            </div>

            {/* Industry Cards Grid - 2 rows x 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industriesData.map((industry) => (
                <IndustryCard
                  key={industry.id}
                  icon={industry.icon}
                  title={industry.title}
                  description={industry.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;