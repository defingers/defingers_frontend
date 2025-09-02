// CTA Component
const CTASection = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 lg:p-10 mt-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-left">
            Ready to Elevate Your Business?
            <br />
            Let's Build Together.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed text-left">
            Schedule a no-obligation consultation with our experts to discuss your project and 
            see how our IT and Cloud solutions can help you achieve your goals.
          </p>
        </div>
        
        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <button className="bg-[#FF8C00] hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 whitespace-nowrap">
            Book a Free Consultation
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 whitespace-nowrap">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;