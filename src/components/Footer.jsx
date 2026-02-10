import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaTwitter , FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from '../assets/images/logo.jpg';
import { categories } from './Navbar/data';
import { MdEmail } from 'react-icons/md';

// Footer data configuration
const footerData = {
  company: {
    name: "DE FINGERS",
    logo: "DF",
    tagline: "DE FINGERS Specialized in Cloud Data Modernization AI & Advanced Analytics Solutions Expert Consulting & Strategic Staffing Flexible Talent Delivery Model",
    email: "hr@dfingers.com",
    phone: "+91 7981 218151",
    address: [
      "DE FINGERS",
      "20, Street Number 4",
      "HUDA Techno Enclave, Hitech-City",
      "Hyderabad, Telangana - India - 500081"
    ],
    copyright: `© ${new Date().getFullYear()} DE FINGERS  All rights reserved.`
  },
  socialLinks: [
     {
      name: "Email",
      href: "mailto:hr@dfingers.com",
      icon: MdEmail
    },
    {
      name: "Twitter",
      href: "https://x.com/aboutfingers",
      icon: FaTwitter
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/digitization.fingers.1/",
      icon: FaFacebook
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
      name: "WhatsApp",
      href: "https://wa.me/917981218151",
      icon: IoLogoWhatsapp
    },
  ],
  navigation: {
    services: {
      title: "Services",
      links: [
        // AI and Data Services
        { name: "Data Engineering", href: "/ai-data/1" },
        { name: "Generative AI/ML", href: "/ai-data/3" },
        // Cloud and Infrastructure
        { name: "Cloud Transformation", href: "/cloud/1" },
        { name: "Cyber Security Services", href: "/cloud/3" },
        // Digital Marketing Services
        { name: "Content Marketing", href: "/marketing/1" },
        { name: "Social Media Management", href: "/marketing/2" },
        // Quality Assurance Services
        { name: "Test Automation", href: "/qa/1" },
        // Staffing and Consulting Services
        { name: "Resource Consulting", href: "/staffing/1" },
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "https://www.linkedin.com/company/definger" },
        { name: "Case Studies", href: "#testimonials" },
        { name: "IT Latest News", href: "https://www.techtarget.com/news/" },
        { name: "Events", href: "https://t-hub.co/" },
        { name: "Downloads", href: "#" },
        { name: "Employ Onboard", href: "https://forms.office.com/r/nNF0Kuk8J8?origin=lprLink" },
        { name: "Job Search", href: "https://forms.office.com/Pages/ShareFormPage.aspx?id=Y-5iOJfsAUqtEANzUgBJRsgDgNqBtRJFtPtTI26HJm5UMlkyUVNNTFBPS1NGTFpZTzVENjlWODZaUy4u&sharetoken=eBj41atXtZDV3LISQc3y" },
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Our Offices", href: "/contact" },
        { name: "Our Team", href: "/about/#our-team" }
      ]
    },
    partners: {
      title: "Partners",
      links: [
        { name: "SOFTSOL", href: "https://www.softsol.com/" },
        { name: "FUSIL", href: "https://www.fusilsolutions.com/" },
        { name: "JNVAT", href: "https://jnvat.com/" },
      ]
    }
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.7856478649322!2d78.3848692!3d17.4460593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910011a0bbff%3A0x1b073dbc2588b5cf!2sDE%20FINGERS!5e0!3m2!1sen!2sin!4v1769850397110!5m2!1sen!2sin",
    directUrl: "https://maps.app.goo.gl/zQktWmHawBtnN6YD6"
  }
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center mr-3">
                <img 
                  src={logo} 
                  alt={footerData.company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-800 font-semibold text-sm hover:text-[#FF8C00] transition-colors">
                {footerData.company.name}
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed text-justify">
              {footerData.company.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-2 mb-8 max-w-fit">
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
                <a href={`mailto:${footerData.company.email}`} className="text-sm hover:text-gray-900 transition-colors">
                  {footerData.company.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3" />
                <a href={`tel:${footerData.company.phone.replace(/\s/g, '')}`} className="text-sm hover:text-gray-900 transition-colors">
                  {footerData.company.phone}
                </a>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">{footerData.navigation.services.title}</h3>
            <ul className="space-y-3">
              {footerData.navigation.services.links.map((link, index) => (
                <li key={index}>
                  {link.href === "#" ? (
                    <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.name}
                    </Link>
                  )}
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
                  {link.href === "#" ? (
                    <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.name}
                    </a>
                  ) : link.href.startsWith("#") ? (
                    <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.name}
                    </Link>
                  )}
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
                  {link.href === "#" ? (
                    <a href={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.name}
                    </a>
                  ) : link.href.includes('/#') ? (
                    <Link 
                      to={link.href} 
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors" 
                      onClick={() => {
                        setTimeout(() => {
                          const id = link.href.split('#')[1];
                          const element = document.getElementById(id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link to={link.href} className="text-gray-600 text-sm hover:text-gray-900 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Partners Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">{footerData.navigation.partners.title}</h3>
            <ul className="space-y-3">
              {footerData.navigation.partners.links.map((link, index) => (
                <li key={index}>
                  {link.href === "" || link.href === "#" ? (
                    <span className="text-gray-600 text-sm">
                      {link.name}
                    </span>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Address & Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-base mb-4">Address</h3>
            <div className="flex items-start mb-4">
              <MapPin className="w-4 h-4 mr-3 mt-1 text-gray-400 flex-shrink-0" />
              <div className="text-gray-600 text-sm leading-relaxed">
                {footerData.company.address.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
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
          <div className="flex md:flex-row justify-center items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              {footerData.company.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;