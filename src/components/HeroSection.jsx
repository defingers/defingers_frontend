import React, { useState, useEffect } from 'react';
import "./HeroSection.css";
import RobotHand from "../assets/images/robotHand.png";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Transform Your Cloud Journey. We Build, Scale & Secure.";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    let typingTimeout;
    let repeatTimeout;
    let isUnmounted = false;

    const typeText = (index = 0) => {
      if (isUnmounted) return;
      setDisplayedText(fullText.slice(0, index));
      if (index < fullText.length) {
        typingTimeout = setTimeout(() => typeText(index + 1), typingSpeed);
      } else {
        // Wait for the rest of the 7s, then restart
        repeatTimeout = setTimeout(() => {
          setDisplayedText('');
          typeText(0);
        }, 7000 - fullText.length * typingSpeed);
      }
    };

    typeText();

    return () => {
      isUnmounted = true;
      clearTimeout(typingTimeout);
      clearTimeout(repeatTimeout);
    };
  }, []);

  const renderTextWithColors = (text) => {
    const words = text.split(' ');
    const colorPattern = [
      'Transform', 'Your', 'Cloud', 'Journey.', 
      'We', 'Build,', 'Scale', '&', 'Secure.'
    ];
    
    const orangeWords = ['Your', 'Cloud', 'Journey.', 'We', 'Build,', 'Scale'];
    
    return words.map((word, index) => {
      const isOrange = orangeWords.includes(word);
      return (
        <span key={index} className={isOrange ? "orange" : "black"}>
          {word}{' '}
        </span>
      );
    });
  };
  
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left px-12">
          <div style={{ position: 'relative', width: '100%' }}>
            {/* Reserve space for full heading to prevent layout shift */}
            <h1 className="hero-heading" style={{ visibility: 'hidden', margin: 0 }}>
              {renderTextWithColors(fullText)}
            </h1>
            {/* Animated visible text absolutely positioned on top */}
            <h1 className="hero-heading" style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              margin: 0,
              pointerEvents: 'none',
              background: 'transparent',
            }}>
              {renderTextWithColors(displayedText)}
              <span className="typing-cursor">|</span>
            </h1>
          </div>

          <p className="hero-subtext">
            Accelerate your digital transformation with secure, scalable, and
            future-ready cloud solutions.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-orange">Learn More</button>
            <button className="btn btn-gold">Get Started</button>
          </div>
        </div>

        {/* RIGHT SIDE (curvy container) */}
        <div className="hero-right">
          <div className="hero-right-content">
            <div className="hero-image-wrapper">
              <img src={RobotHand} alt="Hand" className="hero-image" />
            </div>
            <p className="hero-caption">
              Your Trusted Hand in IT & Consulting Solutions
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .typing-cursor {
          animation: blink 0.7s infinite;
          color: #ff8c00;
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;