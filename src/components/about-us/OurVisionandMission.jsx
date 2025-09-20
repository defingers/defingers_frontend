import React from "react";
import visionImg from "../../assets/icons/vision.svg";
import missionImg from "../../assets/icons/mission.svg";

const OurVisionandMission = () => (
    <section className="w-full flex flex-col gap-16 py-8 px-4 sm:px-8">

        {/* Vision */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
            {/* Image first on mobile, left on desktop */}
            <div className="order-1 lg:order-none flex-1 flex items-center justify-center px-0 lg:px-6">
                <div className="border border-gray-300 rounded-2xl w-full max-w-xs md:max-w-md sm:max-w-2xl bg-white flex items-center justify-center">
                    <img src={missionImg} alt="Vision" className="w-full h-auto rounded-2xl" />
                </div>
            </div>
            {/* Content second on mobile, right on desktop */}
            <div className="order-2 lg:order-none flex-1 flex items-center justify-center px-0 lg:px-6">
                <div className="bg-[#fef1b7] rounded-2xl p-6 md:p-10 w-full max-w-2xl text-left shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4 font-poppins"> Our Mission</h2>
                    <p className="text-base md:text-lg font-outfit text-black/90">
                      To deliver the highest quality, cost-efficient, and risk-free solutions by simplifying complex business processes through operational excellence and innovation. We strive to empower organizations to achieve their goals through innovative strategies and a commitment to excellence.
                    </p>
                </div>
            </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 w-full">
            {/* Image first on mobile, right on desktop */}
            <div className="order-1 lg:order-none flex-1 flex items-center justify-center px-0 lg:px-6">
                <div className="border border-gray-300 rounded-2xl w-full max-w-xs md:max-w-md bg-white flex items-center justify-center">
                    <img src={visionImg} alt="Mission" className="w-full h-auto rounded-2xl" />
                </div>
            </div>
            {/* Content second on mobile, left on desktop */}
            <div className="order-2 lg:order-none flex-1 flex items-center justify-center px-0 lg:px-6">
                <div className="bg-[#fef1b7] rounded-2xl p-6 md:p-10 w-full max-w-3xl text-left shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4 font-poppins">Our Vision</h2>
                    <p className="text-base md:text-lg font-outfit text-black/90">
                        To intelligently connect people, processes, and devices with the right technologies, fostering tight and efficient collaboration to generate maximum value for our clients and partners. 
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default OurVisionandMission;