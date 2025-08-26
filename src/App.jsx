// import './App.css'

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ServicesPage from './pages/ServicesPage.jsx'
import serviceContent from './global/services.json'
import Home from './components/Home.jsx'

function ServiceRoutePage() {
  const { id } = useParams();
  const service = serviceContent.find(s => String(s.id) === String(id));
  if (!service) return <div>Service not found</div>;
  return <ServicesPage serviceContent={service} />;
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
