const MilestoneCard = ({ number, title, description }) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 relative transform hover:scale-105 transition-transform duration-300 min-h-[180px] max-w-xs mx-auto backdrop-blur-sm">
      {/* Number Badge - Centered */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="pt-6 flex flex-col h-full">
        <h3 className="text-md font-semibold text-[#FF8C00] mb-4 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};
export default MilestoneCard;