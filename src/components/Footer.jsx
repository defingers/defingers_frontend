import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaTwitter , FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from '../assets/images/logo.jpg';

// Footer data configuration
const footerData = {
  company: {
    name: "DE FINGERS",
    logo: "DF",
    tagline: "Trusted partner in IT Journey.",
    email: "hr@dfingers.com",
    phone: "+91-7981 218151",
    address: "DE FINGERS 20, Street Number 4, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081",
    copyright: `© ${new Date().getFullYear()} De Fingers. All rights reserved.`
  },
  socialLinks: [
    {
      name: "Twitter",
      href: "https://x.com/aboutfingers",
      icon: FaTwitter
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/917981218151",
      icon: IoLogoWhatsapp
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/definger/",
      icon: FaLinkedin
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@DEFINGERS-720",
      icon: FaYoutube
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/digitization.fingers.1/",
      icon: FaFacebook
    }
  ],
  navigation: {
    services: {
      title: "Services",
      links: [
        { name: "Cloud Migration", href: "#" },
        { name: "IT Infrastructure", href: "#" },
        { name: "Data lake management", href: "#" },
        { name: "IT recruitment", href: "#" },
        { name: "Staff augmentation", href: "#" },
        { name: "Training", href: "#" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact Us", href: "#" }
      ]
    }
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.7856478649322!2d78.3848692!3d17.4460593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910011a0bbff%3A0x1b073dbc2588b5cf!2sDE%20FINGERS!5e0!3m2!1sen!2sin!4v1769850397110!5m2!1sen!2sin",
    directUrl: "https://maps.app.goo.gl/zQktWmHawBtnN6YD6"
  },
  legal: [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center mr-3">
                <img 
                  src={logo} 
                  alt={footerData.company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-800 font-semibold text-sm">{footerData.company.name}</span>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {footerData.company.tagline}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {footerData.socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">{footerData.company.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">{footerData.company.phone}</span>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">{footerData.navigation.services.title}</h3>
            <ul className="space-y-3">
              {footerData.navigation.services.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">{footerData.navigation.resources.title}</h3>
            <ul className="space-y-3">
              {footerData.navigation.resources.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">{footerData.navigation.company.title}</h3>
            <ul className="space-y-3">
              {footerData.navigation.company.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Address & Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">Address</h3>
            <div className="flex items-start mb-4">
              <MapPin className="w-4 h-4 mr-3 mt-1 text-gray-400 flex-shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {footerData.company.address}
              </p>
            </div>
            
            {/* Map */}
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe
                src={footerData.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300"
              ></iframe>
              
              {/* Custom "View larger map" with location icon overlay */}
              <div className="absolute top-2 left-2 z-10">
                <a 
                  href={footerData.map.directUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 bg-white bg-opacity-95 px-2 py-1 rounded shadow-sm border border-gray-300 inline-flex items-center hover:shadow-md transition-all duration-200"
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              {footerData.company.copyright}
            </div>
            <div className="flex space-x-6">
              {footerData.legal.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-500 text-sm hover:text-gray-700 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;