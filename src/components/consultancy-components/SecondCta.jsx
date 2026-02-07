import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const SecondCta = ({ consultancyContent }) => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#FFAF41] py-10 md:py-16 flex items-center justify-center px-4">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6 font-montserrat">
                    {consultancyContent.secondCta?.text || consultancyContent.WhyChooseConsultancy.headingTag}
                </h2>
                <Button
                    color="white"
                    className="w-full max-w-xs md:max-w-none md:w-80 font-outfit mt-5 border border-gray-400"
                    onClick={() => navigate('/contact')}
                >
                    Let's Connect
                </Button>
            </div>
        </section>
    );
};

export default SecondCta;
