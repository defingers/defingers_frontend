
import HeroSection from "../components/security/HeroSection.jsx";
import MainServices from "../components/security/MainServices";
import ServicesSection from "../components/security/ServicesSection.jsx";
import SecondCta from "../components/security/SecondCta.jsx";


const SecurityPage = () => {
    return (

        <div className="pt-[65px]">
            <HeroSection />
            <MainServices />
            <ServicesSection />
            <SecondCta />
    
        </div>

    );
};

export default SecurityPage;