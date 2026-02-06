import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import serviceContent from './global/services.json'
import aidataContent from './global/aidata.json'
import consultancyContent from './global/consultancy.json'
import cloudContent from './global/cloud.json'
import marketingContent from './global/marketing.json'
import qaContent from './global/qa.json'
import staffingContent from './global/staffing.json'
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ConsultancyPage from "./pages/consultancyPage.js";
import AboutPage from "./pages/AboutUsPage.jsx";
import ContactForm from "./components/form/ContactForm.jsx";

function AiDataRoutePage() {
  const { id } = useParams();
  const service = aidataContent.find(s => String(s.id) === String(id));
  if (!service) return <div>Service not found</div>;
  return <ServicesPage serviceContent={service} />;
}

function CloudRoutePage() {
  const { id } = useParams();
  const service = cloudContent.find(s => String(s.id) === String(id));
  if (!service) return <div>Service not found</div>;
  return <ServicesPage serviceContent={service} />;
}

function MarketingRoutePage() {
  const { id } = useParams();
  const marketing = marketingContent.find(c => String(c.id) === String(id));
  if (!marketing) return <div>Service not found</div>;
  return <ConsultancyPage consultancyContent={marketing} />;
}

function QARoutePage() {
  const { id } = useParams();
  const qa = qaContent.find(s => String(s.id) === String(id));
  if (!qa) return <div>Service not found</div>;
  return <ServicesPage serviceContent={qa} />;
}

function StaffingRoutePage() {
  const { id } = useParams();
  const staffing = staffingContent.find(c => String(c.id) === String(id));
  if (!staffing) return <div>Service not found</div>;
  return <ConsultancyPage consultancyContent={staffing} />;
}

function ConsultancyRoutePage() {
  const { id } = useParams();
  const consultancy = consultancyContent.find(c => String(c.id) === String(id));
  if (!consultancy) return <div>Consultancy not found</div>;
  return <ConsultancyPage consultancyContent={consultancy} />;
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/ai-data/:id"
          element={<AiDataRoutePage />}
        />
        <Route
          path="/cloud/:id"
          element={<CloudRoutePage />}
        />
        <Route
          path="/marketing/:id"
          element={<MarketingRoutePage />}
        />
        <Route
          path="/qa/:id"
          element={<QARoutePage />}
        />
        <Route
          path="/staffing/:id"
          element={<StaffingRoutePage />}
        />
        <Route
          path="/consultancy/:id"
          element={<ConsultancyRoutePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/contact"
          element={<ContactForm/>}
        />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}
export default App
