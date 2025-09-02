
const IndustryCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FFB641] transition-colors duration-300 rounded-lg p-4 text-white">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
          <div className="text-xl text-white">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-base font-bold mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-xs text-white text-opacity-90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
export default IndustryCard;