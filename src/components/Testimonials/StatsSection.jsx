
const StatsSection = () => {
  const stats = [
    {
      number: "25+",
      label: "Projects Delivered"
    },
    {
      number: "50+",
      label: "Years Combined Experience"
    },
    {
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section className="bg-yellow-50 py-5 md:py-7 lg:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#FF8C00] mb-2 md:mb-3">
                {stat.number}
              </div>
              <div className="text-gray-800 text-sm md:text-base lg:text-sm xl:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;