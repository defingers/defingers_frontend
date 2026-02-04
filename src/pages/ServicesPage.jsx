import React from "react";
import HeroSection from "../components/services-components/HeroSection";
import ServiceTransition from "../components/services-components/ServiceTransition";
import Keybenefits from "../components/services-components/Keybenefits";
import ServiceAdvantage from "../components/services-components/ServiceAdvantage";
import Faqs from "../components/services-components/Faqs";
import SecondCta from "../components/services-components/SecondCta";

const ServicesPage = ({ serviceContent }) => {
    return (
        <div className="pt-6">
            <HeroSection serviceContent={serviceContent} />
            <ServiceTransition serviceContent={serviceContent} />
            <Keybenefits serviceContent={serviceContent} />
            <ServiceAdvantage serviceContent={serviceContent} />
            <Faqs serviceContent={serviceContent} />
            <SecondCta serviceContent={serviceContent} />

        </div>
    );
};

export default ServicesPage;
