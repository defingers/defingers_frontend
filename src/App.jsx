import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ServicesLayout from './components/suiteServices/ServicesLayout'
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies'


function App() {

  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <ServicesLayout />
        <TrustedCompanies />
      </div>
    </>
  )
}

export default App
