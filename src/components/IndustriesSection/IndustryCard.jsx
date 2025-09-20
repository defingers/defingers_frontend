
const IndustryCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FFB641] rounded-lg p-4 text-white min-h-[140px] shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon */}
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
          <div className="text-xl text-white">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-bold mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-xs text-white text-opacity-90 leading-relaxed flex-grow flex items-center">
          {description}
        </p>
      </div>
    </div>
  );
};
export default IndustryCard;