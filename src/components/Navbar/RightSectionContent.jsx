import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RightSectionContent.css';

const RightSectionContent = ({ option, contentData }) => {
  const navigate = useNavigate();
  
  // Get the data for the selected option
  const data = contentData[option];

  // Handle navigation when button is clicked
  const handleNavigate = () => {
    if (data && data.navigationEndpoint) {
      navigate(data.navigationEndpoint);
    }
  };

  if (!data) {
    return (
      <div className="placeholder">
        <p className="placeholder-text">Select an option to see details here</p>
      </div>
    );
  }

  return (
    <div className="right-content">
      <div className="content-layout">
        
        {/* Left Content */}
        <div className="content-left">
          <h3 className="content-title">{data.title}</h3>
          <p className="content-description">{data.description}</p>
          
          <button 
            className="read-more-btn"
            onClick={handleNavigate}
          >
            {data.buttonText}
            <svg 
              className="btn-arrow" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Content */}
        <div className="content-right">
          <div className="image-container">
            <img 
              src={data.image} 
              alt={data.title}
              className="content-image"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightSectionContent;