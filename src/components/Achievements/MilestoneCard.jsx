const MilestoneCard = ({ number, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 relative transform hover:scale-105 transition-transform duration-300">
      {/* Number Badge */}
      <div className="absolute -top-4 left-6">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="pt-4">
        <h3 className="text-2xl font-semibold text-[#FF8C00] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
export default MilestoneCard;