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
              <div className="relative z-10 px-8 py-16 flex flex-col items-center justify-center min-h-[300px] text-center">
                {/* Title */}
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6 tracking-wide"
                  style={{ color: social.textColor || '#FFFFFF' }}
                >
                  {social.title}
                </h2>
                {/* Description */}
                <p
                  className="text-sm md:text-base mb-8 max-w-xs leading-relaxed opacity-90"
                  style={{ color: social.textColor || '#FFFFFF' }}
                >
                  {social.description}
                </p>
                {/* Button */}
                <button
                  className="border-2 px-8 py-3 rounded hover:opacity-80 transition-all duration-300 font-semibold text-sm tracking-wide flex items-center gap-2"
                  style={{
                    borderColor: social.buttonColor || '#FFFFFF',
                    color: social.buttonColor || '#FFFFFF',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.buttonColor || '#FFFFFF';
                    e.currentTarget.style.color = social.textColor === '#333333' ? '#FFFFFF' : '#333333';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = social.buttonColor || '#FFFFFF';
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(social.link);
                  }}
                >
                  <span>{social.buttonIcon}</span>
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