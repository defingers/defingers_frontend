import heroImg from "../../assets/logo.png";
import { FaEye } from "react-icons/fa";
import { TbRotate360 } from "react-icons/tb";
import { MdLayers } from "react-icons/md";

const HeroSection = () => (
    <section className="bg-[#fcf3e7] min-h-[80vh] px-4 sm:px-6 py-8 md:py-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 w-full">
            
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col justify-center items-start w-full lg:max-w-[350px] xl:max-w-[400px]">
                <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-left leading-tight font-poppins">
                    We Help Businesses Grow <br />
                    Through <span className="text-orange-500">Technology</span>
                </h1>
                <p className="text-base xs:text-lg md:text-lg text-left mb-6 md:mb-8 font-normal text-black/80 font-outfit">
                    We are a forward-thinking IT consultancy dedicated to helping businesses navigate the digital landscape and achieve sustainable growth through innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-2 md:mt-4 font-poppins w-full">
                    <div className="flex items-center gap-3">
                        <span className="bg-orange-400 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold font-outfit">5+</span>
                        <div>
                            <div className="font-semibold text-base sm:text-lg text-black font-poppins">Years Experience</div>
                            <div className="text-sm text-gray-500 font-outfit">In IT Consultancy and IT Services</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-orange-400 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold font-outfit">15+</span>
                        <div>
                            <div className="font-semibold text-base sm:text-lg text-black">Projects Delivered</div>
                            <div className="text-sm text-gray-500 font-outfit">Across Industries</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Center: Image */}
            <div className="flex justify-center items-center">
                <img
                    src={heroImg}
                    alt="Technology Hero"
                    className="rounded-2xl w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] object-cover"
                />
            </div>

            {/* Right: Perspective Levels */}
            <div className="flex-1 flex flex-col justify-center items-start w-full lg:max-w-[350px] xl:max-w-[400px] space-y-6 md:space-y-8">
                
                {/* 180° */}
                <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaEye className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg sm:text-xl text-black font-poppins mb-1">
                            180° – One side of the coin
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-outfit leading-relaxed">
                            Seeing only a single perspective.
                        </p>
                    </div>
                </div>

                {/* 360° */}
                <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <TbRotate360 className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg sm:text-xl text-black font-poppins mb-1">
                            360° – Two dimensional view
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-outfit leading-relaxed">
                            Looking at all sides of the same issue. Complete awareness within a single view.
                        </p>
                    </div>
                </div>

                {/* 720° */}
                <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MdLayers className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg sm:text-xl text-black font-poppins mb-1">
                            720° – Multi dimensional insight
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-outfit leading-relaxed">
                            Going beyond the obvious. Understanding context, intent, impact, time, emotions, and unseen layers.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default HeroSection;
