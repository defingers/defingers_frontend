import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";
import { IoChevronForward } from "react-icons/io5";
import ServicesDropdown from "./ServicesDropdown";

const Navbar = () => {
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
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Left Side - Logo/Brand */}
            <div className="navbar-left">
              <div className="logo-container">
                <div className="logo-wrapper">
                  <img src={logo} alt="DE FINGERS" className="logo-image" />
                </div>
                <span className="brand-name">DE FINGERS</span>
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
                  <a href="#" className="nav-link" onClick={(e) => handleNavClick("about", e)}>
                    About Us
                  </a>
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
              <a href="#quote" className="quote-button">
                Book consultation
              </a>

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
            {/* Add your canvas content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
