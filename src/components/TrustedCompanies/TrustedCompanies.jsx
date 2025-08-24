import React from 'react';

const TrustedSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FF8C00] mb-3">
            Trusted by Industry Leaders
          </h2>
          
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-600 text-base">
            Based on 100+ client reviews
          </p>
        </div>

        {/* Logo Grid - Custom Square Layout */}
        <div className="grid grid-cols-4 grid-rows-4 gap-2 max-w-md mx-auto aspect-square">
          {/* Logo 1 - Top-left diagonal, narrow width */}
          <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 1</span>
          </div>
          
          {/* Logo 2 - Left side, taller */}
          <div className="col-span-1 row-span-2 row-start-2 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 2</span>
          </div>
          
          {/* Logo 3 - Top middle */}
          <div className="col-span-2 row-span-1 col-start-2 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 3</span>
          </div>
          
          {/* Logo 4 - Center */}
          <div className="col-span-2 row-span-1 col-start-2 row-start-2 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 4</span>
          </div>
          
          {/* Logo 5 - Bottom middle */}
          <div className="col-span-2 row-span-1 col-start-2 row-start-3 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 5</span>
          </div>
          
          {/* Logo 6 - Right side, moved up to align with middle logos */}
          <div className="col-span-1 row-span-2 col-start-4 row-start-1 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 6</span>
          </div>
          
          {/* Logo 7 - Right side bottom, moved up */}
          <div className="col-span-1 row-span-1 col-start-4 row-start-3 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs">Logo 7</span>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;