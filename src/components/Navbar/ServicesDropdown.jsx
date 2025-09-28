import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import "./ServicesDropdown.css";
import RightSectionContent from "./RightSectionContent";
import {contentData,categories} from "./data.js"

const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // Find the first category and its first option
  const firstCategory = categories[0];
  const firstOption = firstCategory?.items[0]?.name;

  // Determine which category and option to show/highlight
  let hoveredCat = hoveredCategory;
  let optionToShow = selectedOption;
  if (isOpen && !hoveredCat && !selectedOption) {
    hoveredCat = firstCategory?.name;
    optionToShow = firstOption;
  } else if (isOpen && hoveredCat && !selectedOption) {
    // If hovering a category and nothing is selected, show its first option
    const hoveredCatObj = categories.find(c => c.name === hoveredCat);
    optionToShow = hoveredCatObj?.items[0]?.name;
  }


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
                      hoveredCat === cat.name ? "active" : ""
                    }`}
                  >
                    <div className="category-content">
                      <cat.icon className="category-icon" />
                      <span>{cat.name}</span>
                    </div>
                    <IoChevronForward
                      className={`category-arrow ${
                        hoveredCat === cat.name ? "arrow-open" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu (only visible on hover or default */}
                  {hoveredCat === cat.name && (
                    <div className="submenu">
                      {cat.items.map((item, idx) => {
                        // Highlight logic: if selectedOption, highlight that; else highlight first submenu of hoveredCat
                        let isSelected = false;
                        if (selectedOption) {
                          isSelected = selectedOption === item.name;
                        } else if (hoveredCat === cat.name && idx === 0) {
                          isSelected = true;
                        }
                        return (
                          <div
                            key={item.name}
                            className={`submenu-item ${isSelected ? "selected" : ""}`}
                            onClick={() => setSelectedOption(item.name)}
                          >
                            <item.icon className="submenu-icon" />
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="dropdown-right">
            <RightSectionContent
              option={optionToShow}
              contentData={contentData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
