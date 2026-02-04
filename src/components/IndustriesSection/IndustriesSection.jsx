import React from 'react';
import IndustryCard from './IndustryCard';
import domainsGroupImage from '../../assets/domains_group_image.png';
import { FaLaptopCode, FaHospital, FaUniversity, FaShoppingCart, FaGraduationCap, FaIndustry } from 'react-icons/fa';

const IndustriesSection = () => {
  const industriesData = [
    {
      id: 1,
      icon: FaLaptopCode,
      title: "IT & Software",
      description: "Cutting-edge software solutions and IT infrastructure that drive digital transformation and business efficiency."
    },
    {
      id: 2,
      icon: FaHospital,
      title: "Health & Life Sciences",
      description: "Innovative healthcare solutions that enhance patient care, streamline operations, and ensure regulatory compliance."
    },
    {
      id: 3,
      icon: FaUniversity,
      title: "Finance & Banking",
      description: "Secure, compliant, and scalable financial platforms that modernize banking operations and enhance customer experience."
    },
    {
      id: 4,
      icon: FaShoppingCart,
      title: "E-Commerce & Retail",
      description: "Powerful e-commerce platforms and retail solutions that boost sales, optimize inventory, and elevate customer engagement."
    },
    {
      id: 5,
      icon: FaGraduationCap,
      title: "Education & E-Learning",
      description: "Advanced digital learning platforms and educational technology that transform teaching and improve student outcomes."
    },
    {
      id: 6,
      icon: FaIndustry,
      title: "Manufacturing ",
      description: "Smart manufacturing solutions and IoT-enabled systems that optimize production, reduce costs, and improve quality."
    }
  ];

  return (
    <div id="industries-section" className="bg-gradient-to-br from-yellow-100 to-orange-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

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
                Industries We Empowered In
              </h2>
              <p className="text-gray-700 text-base sm:text-lg max-w-2xl">
                We provide tailored solutions across a diverse range of sectors, 
                helping businesses innovate and thrive.
              </p>
            </div>

            {/* Industry Cards Grid - 2 rows x 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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