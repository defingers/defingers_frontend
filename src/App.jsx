// import './App.css'

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ServicesPage from './pages/ServicesPage.jsx'
import serviceContent from './global/services.json'
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
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  )
}

export default App
