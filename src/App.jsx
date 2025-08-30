// import './App.css'
import StoryAchievementSection from './components/Achievements/StoryAchievementSection'
import Footer from './components/Footer'
// import StorySection from './components/Achievements/StorySection'

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ServicesPage from './pages/ServicesPage.jsx'
import serviceContent from './global/services.json'
import IndustriesSection from './components/IndustriesSection/IndustriesSection'
import consultancyContent from './global/consultancy.json'
import Home from './components/Home.jsx'
import ConsultancyPage from "./pages/consultancyPage.js";

function ServiceRoutePage() {
  const { id } = useParams();
  const service = serviceContent.find(s => String(s.id) === String(id));
  if (!service) return <div>Service not found</div>;
  return <ServicesPage serviceContent={service} />;
}

function ConsultancyRoutePage() {
  const { id } = useParams();
  const consultancy = consultancyContent.find(c => String(c.id) === String(id));
  if (!consultancy) return <div>Consultancy not found</div>;
  return <ConsultancyPage consultancyContent={consultancy} />;
}import ServicesLayout from './components/suiteServices/ServicesLayout'
import TestimonialSection from './components/Testimonials/TestimonialSection'
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
       <Route path="/" element={<Home />} />
        <Route 
          path="/service/:id" 
          element={<ServiceRoutePage />} 
        />
        <Route 
          path="/consultancy/:id" 
          element={<ConsultancyRoutePage />} 
        />
      </Routes>
        <ServicesLayout />
        <IndustriesSection/>
        <TrustedCompanies />
        <StoryAchievementSection />
        <TestimonialSection />
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
