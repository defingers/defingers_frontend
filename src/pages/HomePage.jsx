import StoryAchievementSection from '../components/Achievements/StoryAchievementSection'
import Footer from '../components/Footer'
import HeroSection from '../components//HeroSection'
import IndustriesSection from '../components/IndustriesSection/IndustriesSection'
import Navbar from '../components/Navbar/Navbar'
import ServicesLayout from '../components/suiteServices/ServicesLayout'
import TestimonialSection from '../components/Testimonials/TestimonialSection'
import TrustedCompanies from '../components/TrustedCompanies/TrustedCompanies'
import Partners from '../components/Partners'



const HomePage = () => {
  return (
    <>
     
      <HeroSection />
      <ServicesLayout />
      <IndustriesSection />
      <Partners />
      {/* <TrustedCompanies /> */}
      <StoryAchievementSection />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
