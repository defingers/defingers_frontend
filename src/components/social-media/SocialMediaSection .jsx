import React from 'react';
import socialMediaData from './social_media.json';
import { MdEmail } from 'react-icons/md';
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const iconMap = {
  MdEmail,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp
};

const SocialMediaSection = () => {
  const handleSocialClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="social-media-section" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        {socialMediaData.map((social) => {
          const IconComponent = iconMap[social.icon];
          return (
            <div
              key={social.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{ backgroundColor: social.bgColor }}
              onClick={() => handleSocialClick(social.link)}
            >
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                {IconComponent && (
                  <IconComponent
                    size={280}
                    className="text-gray-300"
                    strokeWidth={1}
                  />
                )}
              </div>
              {/* Content */}
              <div className="relative z-10 px-6 py-12 md:px-8 md:py-14 flex flex-col items-center min-h-[350px] lg:min-h-[320px] text-center">
                <div className="flex-grow flex flex-col items-center justify-center">
                  {/* Title */}
                  <h2
                    className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold mb-4 tracking-wide leading-tight"
                    style={{ color: social.textColor || '#FFFFFF' }}
                  >
                    {social.title}
                  </h2>
                  {/* Description */}
                  <p
                    className="text-xs md:text-sm lg:text-xs xl:text-sm mb-6 max-w-[280px] leading-relaxed opacity-90 line-clamp-3"
                    style={{ color: social.textColor || '#FFFFFF' }}
                  >
                    {social.description}
                  </p>
                </div>
                {/* Button */}
                <button
                  className="border-2 px-6 py-2.5 md:px-8 md:py-3 rounded hover:bg-[#FF8C00] hover:text-white transition-all duration-300 font-semibold text-xs md:text-sm tracking-wide flex items-center gap-2 mt-auto whitespace-nowrap"
                  style={{
                    borderColor: '#FF8C00',
                    color: '#FF8C00',
                    backgroundColor: 'transparent'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(social.link);
                  }}
                >
                  {social.buttonIcon && iconMap[social.buttonIcon] && 
                    React.createElement(iconMap[social.buttonIcon], { size: 16, color: '#000000' })
                  }
                  {social.buttonText}
                </button>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SocialMediaSection;