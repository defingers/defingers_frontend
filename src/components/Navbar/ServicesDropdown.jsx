import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import "./ServicesDropdown.css";
import RightSectionContent from "./RightSectionContent";
import {contentData,categories} from "./data.js"

const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);


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
                    <div className="category-content">
                      <cat.icon className="category-icon" />
                      <span>{cat.name}</span>
                    </div>
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
                          key={item.name}
                          className={`submenu-item ${
                            selectedOption === item.name ? "selected" : ""
                          }`}
                          onClick={() => setSelectedOption(item.name)}
                        >
                          <item.icon className="submenu-icon" />
                          <span>{item.name}</span>
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
            <RightSectionContent
              option={selectedOption}
              contentData={contentData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
