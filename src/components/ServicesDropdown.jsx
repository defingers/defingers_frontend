import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import "./ServicesDropdown.css";
import RightSectionContent from "./RightSectionContent";

const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  // Track hovered category (for submenu open/close)
  const [hoveredCategory, setHoveredCategory] = useState(null);
  // Track which submenu item was clicked
  const [selectedOption, setSelectedOption] = useState(null);

  // Categories + submenu items
  const categories = [
    {
      name: "IT Services",
      items: [
        "Cloud Migration",
        "IT Infrastructure",
        "Data Lake Management",
        "DevOps Services",
        "More Option 1",
      ],
    },
    {
      name: "IT Consulting",
      items: [
        "Strategy Consulting",
        "Process Optimization",
        "Risk Assessment",
        "Digital Transformation",
      ],
    },
  ];

  return (
    <div
      className={`services-dropdown ${isOpen ? "services-dropdown-open" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdown-container">
        <div className="dropdown-content">
          {/* LEFT SIDE */}
          <div className="dropdown-left">
            <div className="service-categories">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="category-wrapper"
                  onMouseEnter={() => setHoveredCategory(cat.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Category Item */}
                  <div
                    className={`category-item ${
                      hoveredCategory === cat.name ? "active" : ""
                    }`}
                  >
                    <span>{cat.name}</span>
                    <IoChevronForward
                      className={`category-arrow ${
                        hoveredCategory === cat.name ? "arrow-open" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu (only visible on hover) */}
                  {hoveredCategory === cat.name && (
                    <div className="submenu">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="submenu-item"
                          onClick={() => setSelectedOption(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="dropdown-right">
            {selectedOption ? (
              <RightSectionContent option={selectedOption} />
            ) : (
              <div className="placeholder">
                <p>Select an option to see details here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
