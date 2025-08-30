import './App.css'
import StoryAchievementSection from './components/Achievements/StoryAchievementSection'
import Footer from './components/Footer'
// import StorySection from './components/Achievements/StorySection'
import HeroSection from './components/HeroSection'
import IndustriesSection from './components/IndustriesSection/IndustriesSection'
import Navbar from './components/Navbar'
import ServicesLayout from './components/suiteServices/ServicesLayout'
import TestimonialSection from './components/Testimonials/TestimonialSection'
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies'


function App() {

  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <ServicesLayout />
        <IndustriesSection/>
        <TrustedCompanies />
        <StoryAchievementSection />
        <TestimonialSection />
      </div>
      <Footer/>
    </>
  )
}

export default App
