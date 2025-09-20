import CoreValues from "../components/about-us/CoreValues.jsx";
import HeroSection from "../components/about-us/HeroSection.jsx";
import Leadership from "../components/about-us/Leadership.jsx";
import OurVisionandMission from "../components/about-us/OurVisionandMission.jsx";
import Staff from "../components/about-us/Staff.jsx";
import SecondCta from "../components/about-us/SecondCta.jsx";
import WhyChoose from "../components/about-us/WhyChoose.jsx";

const AboutUsPage = () => {
    return (

        <div className="pt-[65px]">
            <HeroSection />
            <OurVisionandMission />
            <CoreValues />
            <Leadership />
            <Staff />
            <WhyChoose />
            <SecondCta />
        </div>

    );
};

export default AboutUsPage;