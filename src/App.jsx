import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import serviceContent from './global/services.json'
import consultancyContent from './global/consultancy.json'

import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ConsultancyPage from "./pages/consultancyPage.js";
import AboutPage from "./pages/AboutUsPage.jsx";
import ContactForm from "./components/form/ContactForm.jsx";

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
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/service/:id"
          element={<ServiceRoutePage />}
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
