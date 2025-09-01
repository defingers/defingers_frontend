const ServiceCard = ({ icon, title, description, buttonText = "Read More" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[280px]" style={{ border: "1px solid orange" }}>
      <div className="p-4 flex flex-col h-full">
        {/* Icon Container */}
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <div className="text-lg text-orange-500">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-center text-xs leading-relaxed flex-grow mb-4">
          {description}
        </p>
        
        {/* Button */}
        <div className="text-center mt-auto">
          <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
            {buttonText}
            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;