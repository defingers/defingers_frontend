import React from "react";
import heroImg from "../../assets/images/cloud-migration.png"; // Update this path to your actual image

const HeroSection = () => (
    <section className="bg-[#fcf3e7] min-h-[80vh] px-4 sm:px-6 py-6 flex items-center justify-center ">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8 md:gap-10 w-full">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center items-start mt-8 lg:mt-0 pr-0 sm:pr-6">
                <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-left leading-tight font-poppins">
                    We Help Businesses Grow <br />
                    Through <span className="text-orange-500">Technology</span>
                </h1>
                <p className="text-base xs:text-lg md:text-lg text-left mb-6 md:mb-8 font-normal text-black/80 max-w-xl font-outfit">
                    We are a forward-thinking IT consultancy dedicated to helping businesses navigate the digital landscape and achieve sustainable growth through innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-2 md:mt-4 font-poppins w-full">
                    <div className="flex items-center gap-3">
                        <span className="bg-orange-400 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold font-outfit">5+</span>
                        <div>
                            <div className="font-semibold text-base sm:text-lg text-black font-poppins">Years Experience</div>
                            <div className="text-sm text-gray-500 font-outfit">In IT Consultancy and IT Services</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-orange-400 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold font-outfit">25+</span>
                        <div>
                            <div className="font-semibold text-base sm:text-lg text-black">Projects Delivered</div>
                            <div className="text-sm text-gray-500 font-outfit">Across Industries</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={heroImg}
                    alt="Technology Hero"
                    className="rounded-2xl w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-lg lg:max-w-4xl object-cover h-[180px] xs:h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[350px]"
                />
            </div>
        </div>
    </section>
);

export default HeroSection;
