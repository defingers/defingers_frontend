import dummyImage from "../../assets/navbar_dummy/dummy_dropdown.svg";
import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaCogs,
  FaChartLine,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaNetworkWired,
} from "react-icons/fa";

export const categories = [
  {
    name: "IT Services",
    icon: FaServer,
    items: [
      { name: "Cloud Migration", icon: FaCloud },
      { name: "IT Infrastructure", icon: FaNetworkWired },
      { name: "Data Lake Management", icon: FaDatabase },
      { name: "DevOps Services", icon: FaCogs },
      { name: "More Option 1", icon: FaRocket },
    ],
  },
  {
    name: "IT Consulting",
    icon: FaLightbulb,
    items: [
      { name: "Strategy Consulting", icon: FaChartLine },
      { name: "Process Optimization", icon: FaCogs },
      { name: "Risk Assessment", icon: FaShieldAlt },
      { name: "Digital Transformation", icon: FaCode },
    ],
  },
];
export const contentData = {
  "Cloud Migration": {
    title: "Cloud Migration",
    description:
      "Seamlessly migrate your infrastructure to the cloud with zero downtime. Our certified experts ensure a smooth transition, minimizing disruption and maximizing performance from day one.",
    buttonText: "Read more",
    image: dummyImage,
    stats: {
      number: "60%",
      label: "Faster Time-to-Market",
    },
  },
  "IT Infrastructure": {
    title: "IT Infrastructure",
    description:
      "We design and manage resilient, high-performance IT infrastructure that forms the backbone of your digital operations. Our proactive monitoring and robust security protocols ensure your systems are always available and secure.",
    buttonText: "Read more",
    image: dummyImage,
    stats: {
      number: "99.99%",
      label: "Guaranteed Uptime",
    },
  },
  "Data Lake Management": {
    title: "Data Lake Management",
    description:
      "Transform your data into actionable insights with our comprehensive data lake management solutions. We help you store, process, and analyze vast amounts of structured and unstructured data efficiently.",
    buttonText: "Learn more",
    image: dummyImage,
    stats: {
      number: "10x",
      label: "Faster Analytics",
    },
  },
  "DevOps Services": {
    title: "DevOps Services",
    description:
      "Accelerate your development lifecycle with our comprehensive DevOps solutions. We implement CI/CD pipelines, infrastructure as code, and automated testing to ensure faster, more reliable deployments.",
    buttonText: "Explore DevOps",
    image: dummyImage,
    stats: {
      number: "75%",
      label: "Deployment Speed Increase",
    },
  },
  "More Option 1": {
    title: "Advanced Solutions",
    description:
      "Discover our cutting-edge technology solutions designed to future-proof your business. From AI integration to blockchain implementation, we deliver innovative solutions that drive growth.",
    buttonText: "Learn more",
    image: dummyImage,
    stats: {
      number: "50%",
      label: "Innovation Boost",
    },
  },
  // IT Consulting Services
  "Strategy Consulting": {
    title: "Strategy Consulting",
    description:
      "Align your technology roadmap with business objectives through our strategic consulting services. We help you make informed decisions about technology investments and digital transformation initiatives.",
    buttonText: "Get Strategic Insights",
    image: dummyImage,
    stats: {
      number: "40%",
      label: "Cost Optimization",
    },
  },
  "Process Optimization": {
    title: "Process Optimization",
    description:
      "Streamline your business operations with our process optimization expertise. We identify bottlenecks, eliminate inefficiencies, and implement best practices to maximize productivity and reduce costs.",
    buttonText: "Optimize Now",
    image: dummyImage,
    stats: {
      number: "35%",
      label: "Efficiency Improvement",
    },
  },
  "Risk Assessment": {
    title: "Risk Assessment",
    description:
      "Protect your business with comprehensive risk assessment and mitigation strategies. Our experts identify vulnerabilities, assess threats, and develop robust security frameworks to safeguard your assets.",
    buttonText: "Assess Risks",
    image: dummyImage,
    stats: {
      number: "90%",
      label: "Risk Reduction",
    },
  },
  "Digital Transformation": {
    title: "Digital Transformation",
    description:
      "Transform your business for the digital age with our comprehensive digital transformation consulting. We help you leverage emerging technologies to create new value propositions and competitive advantages.",
    buttonText: "Start Transformation",
    image: dummyImage,
    stats: {
      number: "80%",
      label: "Digital Maturity Increase",
    },
  },
};
