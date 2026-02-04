import React from "react";

const stats = [
  {
    value: "15+",
    label: "Projects Delivered",
  },
  {
    value: "10+",
    label: "Years Combined Experience",
  },
  {
    value: "90%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

const WhyChoose = () => (
  <section className="w-full bg-[#fcf6ee] py-16 px-2 sm:px-8">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center font-poppins mb-2">
        Why Choose Our Team?
      </h2>
      <div className="w-40 h-1 bg-yellow-400 mx-auto mb-12 rounded"></div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center flex-1 min-w-[160px]"
          >
            <span className="text-4xl md:text-5xl font-bold text-orange-500 font-poppins mb-2">
              {stat.value}
            </span>
            <span className="text-lg md:text-xl font-outfit text-black">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
