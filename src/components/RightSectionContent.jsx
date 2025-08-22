import React from "react";
import { IoChevronForward } from "react-icons/io5";
import logo from "@/assets/logo.jpg";
import "./RightSectionContent.css";

const RightSectionContent = ({ option }) => {
  const contentMap = {
    "Cloud Migration": {
      title: "Cloud Migration",
      desc: "Seamlessly migrate workloads to the cloud with minimal downtime.",
      img: logo,
    },
    "IT Infrastructure": {
      title: "IT Infrastructure",
      desc: "Robust infrastructure solutions for scalability and reliability.",
      img: logo,
    },
    // add more...
  };

  const content = contentMap[option];
  if (!content) return null;

  return (
    <div className="right-content">
      <div className="right-text">
        <h2>{content.title}</h2>
        <p>{content.desc}</p>
        <button className="know-more-btn">
          Know More <IoChevronForward />
        </button>
      </div>
      <div className="right-image">
        <img src={content.img} alt={content.title} />
      </div>
    </div>
  );
};

export default RightSectionContent;
