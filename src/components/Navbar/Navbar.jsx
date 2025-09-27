import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";
import { IoChevronForward } from "react-icons/io5";
import ServicesDropdown from "./ServicesDropdown";
import { categories } from "./data";

const Navbar = () => {
  const [canvasServicesOpen, setCanvasServicesOpen] = useState(false);
  const [canvasHoveredCategory, setCanvasHoveredCategory] = useState(null);
  // Get current path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handlePathChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (section, event) => {
    if (event) {
      event.preventDefault();
    }
    setActiveSection(section);
    
    // Handle smooth scroll to section for Partners
    if (section === "partners") {
      const element = document.getElementById("trusted-companies-section");
      if (element) {
        // Add a small delay to ensure any dropdown closes first
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }, 100);
      }
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar fixed top-0 left-0 w-full z-50 ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Left Side - Logo/Brand */}
            <div className="navbar-left">
              <div className="logo-container">
                <div className="logo-wrapper">
                  <img src={logo} alt="DE FINGERS" className="logo-image" />
                </div>
                <Link to="/" className="no-underline">  
                  <span className="brand-name">DE FINGERS</span>
                </Link>
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="navbar-center">
              <nav className="desktop-nav">
                <div
                  className={`nav-item dropdown ${activeSection === "services" ? "active" : ""}`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="#" className="nav-link" onClick={(e) => handleNavClick("services", e)}>
                    Services
                    <IoChevronForward
                      className={`dropdown-arrow ${
                        isServicesOpen ? "dropdown-arrow-open" : ""
                      }`}
                    />
                  </a>
                </div>
                <div className={`nav-item ${activeSection === "partners" ? "active" : ""}`}>
                  <a href="#trusted-companies-section" className="nav-link" onClick={(e) => handleNavClick("partners", e)}>
                    Partners
                  </a>
                </div>
                <div className={`nav-item ${activeSection === "contacts" ? "active" : ""}`}>
                  <a href="#" className="nav-link" onClick={(e) => handleNavClick("contacts", e)}>
                    Contacts
                  </a>
                </div>
                <div className={`nav-item ${activeSection === "about" ? "active" : ""}`}>
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={() => setActiveSection("about")}
                  >
                    About Us
                  </Link>
                </div>
              </nav>
              <ServicesDropdown
                isOpen={isServicesOpen}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              />
            </div>

            {/* Right Side - Hamburger Menu */}
            {/* Right Side - Button + Hamburger */}
            <div className="navbar-right">
              {/* Get a Quote button (desktop only) */}
              {currentPath !== '/contact' && (
                <a href="/contact" className="quote-button">
                  Book consultation
                </a>
              )}

              <button onClick={toggleMenu} className="hamburger-button">
                <Menu className="hamburger-icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Canvas Menu Overlay */}
      <div
        className={`canvas-overlay ${isMenuOpen ? "canvas-overlay-open" : ""}`}
      >
        {/* Backdrop */}
        <div className="canvas-backdrop" onClick={closeMenu} />

        {/* Canvas Panel */}
        <div className="canvas-panel">
          {/* Canvas Header with Close Button */}
          <div className="canvas-header">
            <button onClick={closeMenu} className="canvas-close-button">
              <X className="close-icon" />
            </button>
          </div>

          {/* Canvas Content */}
          <div className="canvas-content">
            {/* Canvas Nav Options */}
            <nav className="canvas-nav flex flex-col gap-4">
              {/* Services (expandable) */}
              <div>
                <button
                  className="canvas-nav-link flex items-center gap-2 font-semibold text-lg w-full text-left"
                  onClick={() => setCanvasServicesOpen((open) => !open)}
                  aria-expanded={canvasServicesOpen}
                >
                   <span className="font-medium" style={{ color: '#ff8c00' }}>Services</span>
                  <IoChevronForward className={`transition-transform ${canvasServicesOpen ? 'rotate-90' : ''}`} />
                </button>
                {canvasServicesOpen && (
                  <div className="pl-6 pt-2 pb-2">
                    {categories.map((cat) => (
                      <div key={cat.name} className="mb-2">
                        <div
                          className="flex items-center gap-2 cursor-pointer py-1"
                          onClick={() => setCanvasHoveredCategory(cat.name === canvasHoveredCategory ? null : cat.name)}
                        >
                          <cat.icon className="w-4 h-4" />
                          <span className="font-medium">{cat.name}</span>
                          <IoChevronForward className={`transition-transform ${canvasHoveredCategory === cat.name ? 'rotate-90' : ''}`} />
                        </div>
                        {canvasHoveredCategory === cat.name && (
                          <div className="pl-6">
                            {cat.items.map((item) => (
                              <Link to={item.navigationEndpoint} key={item.name} className="block py-1 text-base text-gray-700 hover:text-[#ff8c00]" onClick={closeMenu}>
                                <item.icon className="inline w-4 h-4 mr-2" />{item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Partners */}
              <a href="#trusted-companies-section" className="canvas-nav-link font-semibold text-lg" onClick={closeMenu}>Partners</a>
              {/* Contacts */}
              <Link to="/contact" className="canvas-nav-link font-semibold text-lg" onClick={closeMenu}>Contacts</Link>
              {/* About Us */}
              <Link to="/about" className="canvas-nav-link font-semibold text-lg" onClick={closeMenu}>About Us</Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
