import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const Navbar2 = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="DE FINGERS" className="w-12 h-12 rounded-full object-cover" />
          <span className="font-semibold text-xl tracking-wide">DE FINGERS</span>
        </div>
        {/* Center Nav */}
        <div className="flex items-center gap-10">
          <Link
            to="/ai-data/1"
            className={`font-semibold text-lg flex items-center gap-1 ${
              location.pathname.startsWith("/ai-data") || location.pathname.startsWith("/cloud") || location.pathname.startsWith("/marketing") || location.pathname.startsWith("/qa") || location.pathname.startsWith("/staffing") ? "text-orange-500" : "text-black"
            }`}
          >
            Services
            <span className="text-orange-500 text-xl font-bold">{">"}</span>
          </Link>
          <Link
            to="/partners"
            className="font-semibold text-lg text-black"
          >
            Partners
          </Link>
          <Link
            to="/contacts"
            className="font-semibold text-lg text-black"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={`font-semibold text-lg text-black relative ${
              location.pathname === "/about" ? "" : ""
            }`}
          >
            About Us
            {location.pathname === "/about" && (
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-400 rounded"></span>
            )}
          </Link>
        </div>
        {/* Right Button */}
        <div>
          <a
            href="#quote"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
