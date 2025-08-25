import React from "react";
import HeroSection from "../components/services-components/HeroSection";
import ServiceTransition from "../components/services-components/ServiceTransition";
import Keybenefits from "../components/services-components/Keybenefits";
import ServiceAdvantage from "../components/services-components/ServiceAdvantage";
import Faqs from "../components/services-components/Faqs";
import SecondCta from "../components/services-components/SecondCta";

const ServicesPage = () => {
    return (
        <>
            <HeroSection />
            <ServiceTransition />
            <Keybenefits />
            <ServiceAdvantage />
            <Faqs />
            <SecondCta />

        </>
    );
};

export default ServicesPage;
