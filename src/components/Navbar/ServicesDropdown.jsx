import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import "./ServicesDropdown.css";
import RightSectionContent from "./RightSectionContent";
import {contentData,categories} from "./data.js"

const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const [clickedCategory, setClickedCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // Find the first category and its first option
  const firstCategory = categories[0];
  const firstOption = firstCategory?.items[0]?.name;

  // Determine which category and option to show/highlight
  let activeCat = clickedCategory;
  let optionToShow = selectedOption;
  if (isOpen && !activeCat && !selectedOption) {
    activeCat = firstCategory?.name;
    optionToShow = firstOption;
  } else if (isOpen && activeCat && !selectedOption) {
    // If a category is clicked and nothing is selected, show its first option
    const activeCatObj = categories.find(c => c.name === activeCat);
    optionToShow = activeCatObj?.items[0]?.name;
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
                >
                  {/* Category Item */}
                  <div
                    className={`category-item ${
                      activeCat === cat.name ? "active" : ""
                    }`}
                    onClick={() => setClickedCategory(clickedCategory === cat.name ? null : cat.name)}
                  >
                    <div className="category-content">
                      <cat.icon className="category-icon" />
                      <span>{cat.name}</span>
                    </div>
                    <IoChevronForward
                      className={`category-arrow ${
                        activeCat === cat.name ? "arrow-open" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu (only visible when clicked */}
                  {activeCat === cat.name && (
                    <div className="submenu">
                      {cat.items.map((item, idx) => {
                        // Highlight logic: if selectedOption, highlight that; else highlight first submenu of activeCat
                        let isSelected = false;
                        if (selectedOption) {
                          isSelected = selectedOption === item.name;
                        } else if (activeCat === cat.name && idx === 0) {
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
              closeDropdown={() => {
                if (typeof onMouseLeave === 'function') onMouseLeave();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
