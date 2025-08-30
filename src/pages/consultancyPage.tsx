import React from "react";
import HeroSection from "../components/consultancy-components/HeroSection";
import ConsultancyFocused from "../components/consultancy-components/ConsultancyFocused";
import Keybenefits from "../components/consultancy-components/Keybenefits";
import WhyChooseConsultancy from "../components/consultancy-components/WhyChooseConsultancy";
import Faqs from "../components/consultancy-components/Faqs";
import SecondCta from "../components/consultancy-components/SecondCta";



const ConsultancyPage = ({ consultancyContent }) => {
    return (
        <>
            <HeroSection consultancyContent={consultancyContent} />
            <ConsultancyFocused consultancyContent={consultancyContent} />
            <Keybenefits consultancyContent={consultancyContent} />
            <WhyChooseConsultancy consultancyContent={consultancyContent} />
            <Faqs consultancyContent={consultancyContent} />
            <SecondCta consultancyContent={consultancyContent} />
        </>
    );
};

export default ConsultancyPage;