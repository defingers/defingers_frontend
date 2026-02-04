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
import { TbCloudComputing } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
export const categories = [
  {
    name: "AI and Data Services",
    icon: FaServer,
    items: [
      { name: "Data Engineering & Management", icon: FaCloud, navigationEndpoint: "/service/1" },
      { name: "Data Analytics & Visualization", icon: FaNetworkWired, navigationEndpoint: "/service/2" },
      { name: "Generative AI/ML", icon: FaDatabase, navigationEndpoint: "/service/3" },
      { name: "Enterprise Data Management", icon: FaCogs, navigationEndpoint: "/service/4" },
    ],
  },
  {
    name: "Cloud and Infrastructure",
    icon: TbCloudComputing,
    items: [
      { name: "Cloud Transformation", icon: FaChartLine, navigationEndpoint: "/Cloud/1" },
      { name: "DevOps & CloudOps", icon: FaCogs, navigationEndpoint: "/cloud/2" },
      { name: "Cyber Security Services", icon: FaShieldAlt, navigationEndpoint: "/cloud/3" },
      { name: "Infrastructure Management", icon: FaCode, navigationEndpoint: "/cloud/4" },
    ],
  },
  {
    name: "Digital Marketing Services",
    icon: FaLightbulb,
    items: [
      { name: "Content Marketing", icon: FaChartLine, navigationEndpoint: "/consultancy/1" },
      { name: "Social Media Management", icon: FaCogs, navigationEndpoint: "/consultancy/2" },
      { name: "Web & SEO Optimization", icon: FaShieldAlt, navigationEndpoint: "/consultancy/3" },
      { name: "Digital Advertising", icon: FaCode, navigationEndpoint: "/consultancy/4" },
    ],
  },
  {
    name: "Quality Assurance Services",
    icon: FaTools,
    items: [
      { name: "Test Automation", icon: FaChartLine, navigationEndpoint: "/consultancy/1" },
      { name: "Performance Engineering", icon: FaCogs, navigationEndpoint: "/consultancy/2" },
      { name: "AI - Augumented Testing", icon: FaShieldAlt, navigationEndpoint: "/consultancy/3" },
      { name: "QA Tools & Accelerators", icon: FaCode, navigationEndpoint: "/consultancy/4" },
    ],
  },
  {
    name: "Staffing and Consulting Services",
    icon: IoPersonSharp,
    items: [
      { name: "IT Staffing", icon: FaChartLine, navigationEndpoint: "/consultancy/1" },
      { name: "Pay-role Management", icon: FaCogs, navigationEndpoint: "/consultancy/2" },
      { name: "Bench Management", icon: FaShieldAlt, navigationEndpoint: "/consultancy/3" },
      { name: "Talent Acquisition", icon: FaCode, navigationEndpoint: "/consultancy/4" },
    ],
  },
];
export const contentData = {
  "Data Engineering & Management": {
    title: "Data Engineering & Management",
    description:
      "Seamlessly migrate your infrastructure to the cloud with zero downtime. Our certified experts ensure a smooth transition, minimizing disruption and maximizing performance from day one.",
    buttonText: "Read more",
    image: dummyImage,
    navigationEndpoint: "/service/1",
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
    navigationEndpoint: "/service/2",
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
    navigationEndpoint: "/service/3",
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
    navigationEndpoint: "/service/4",
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
    navigationEndpoint: "/service/5",
    stats: {
      number: "50%",
      label: "Innovation Boost",
    },
  },
  // Cloud and Infrastructure Services
  "Cloud Transformation": {
    title: "Cloud Transformation",
    description:
      "Seamlessly migrate your infrastructure to the cloud with zero downtime. Our certified experts ensure a smooth transition, maximizing performance and minimizing disruption.",
    buttonText: "Start Migration",
    image: dummyImage,
    navigationEndpoint: "/Cloud/1",
    stats: {
      number: "60%",
      label: "Cost Reduction",
    },
  },
  "DevOps & CloudOps": {
    title: "DevOps & CloudOps",
    description:
      "Accelerate your development lifecycle with automated CI/CD pipelines and cloud operations. We ensure faster, more reliable deployments with enhanced collaboration.",
    buttonText: "Explore DevOps",
    image: dummyImage,
    navigationEndpoint: "/cloud/2",
    stats: {
      number: "75%",
      label: "Deployment Speed",
    },
  },
  "Cyber Security Services": {
    title: "Cyber Security Services",
    description:
      "Protect your business with comprehensive cybersecurity solutions. We implement multi-layered security frameworks to safeguard your data and infrastructure from threats.",
    buttonText: "Secure Now",
    image: dummyImage,
    navigationEndpoint: "/cloud/3",
    stats: {
      number: "99%",
      label: "Threat Prevention",
    },
  },
  "Infrastructure Management": {
    title: "Infrastructure Management",
    description:
      "Ensure high availability and performance with our proactive infrastructure management. We monitor, maintain, and optimize your IT infrastructure 24/7.",
    buttonText: "Learn More",
    image: dummyImage,
    navigationEndpoint: "/cloud/4",
    stats: {
      number: "99.9%",
      label: "Uptime Guarantee",
    },
  },
  "Data Analytics & Visualization": {
    title: "Data Analytics & Visualization",
    description:
      "Transform raw data into actionable insights with advanced analytics and intuitive visualizations. Make data-driven decisions that propel your business forward.",
    buttonText: "Discover Insights",
    image: dummyImage,
    navigationEndpoint: "/service/2",
    stats: {
      number: "5x",
      label: "Faster Decisions",
    },
  },
  "Generative AI/ML": {
    title: "Generative AI/ML",
    description:
      "Harness the power of generative AI and machine learning to automate processes, enhance creativity, and unlock new possibilities for innovation.",
    buttonText: "Explore AI",
    image: dummyImage,
    navigationEndpoint: "/service/3",
    stats: {
      number: "10x",
      label: "Productivity Boost",
    },
  },
  "Enterprise Data Management": {
    title: "Enterprise Data Management",
    description:
      "Centralize and manage your enterprise data with robust governance, quality controls, and security. Ensure data accuracy, consistency, and compliance across the organization.",
    buttonText: "Manage Data",
    image: dummyImage,
    navigationEndpoint: "/service/4",
    stats: {
      number: "85%",
      label: "Data Quality",
    },
  },
  // IT Consulting Services
  "IT Recruitment": {
    title: "IT Recruitment",
    description:
      "Find and hire top-tier IT talent with our comprehensive recruitment services. We specialize in connecting businesses with skilled professionals who drive innovation and growth.",
    buttonText: "Find Talent",
    image: dummyImage,
    navigationEndpoint: "/consultancy/1",
    stats: {
      number: "95%",
      label: "Placement Success Rate",
    },
  },
  "Strategy Consulting": {
    title: "Strategy Consulting",
    description:
      "Align your technology roadmap with business objectives through our strategic consulting services. We help you make informed decisions about technology investments and digital transformation initiatives.",
    buttonText: "Get Strategic Insights",
    image: dummyImage,
    navigationEndpoint: "/consultancy/2",
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
    navigationEndpoint: "/consultancy/3",
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
    navigationEndpoint: "/consultancy/4",
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
    navigationEndpoint: "/consultancy/5",
    stats: {
      number: "80%",
      label: "Digital Maturity Increase",
    },
  },
  // Digital Marketing Services
  "Content Marketing": {
    title: "Content Marketing",
    description:
      "Create engaging, high-quality content that resonates with your audience and drives conversions. Our content strategies are designed to build brand authority and foster customer loyalty.",
    buttonText: "Learn More",
    image: dummyImage,
    navigationEndpoint: "/consultancy/1",
    stats: {
      number: "3x",
      label: "Engagement Increase",
    },
  },
  "Social Media Management": {
    title: "Social Media Management",
    description:
      "Build and maintain a strong social media presence across all platforms. We create, schedule, and optimize content to maximize reach, engagement, and brand awareness.",
    buttonText: "Explore Services",
    image: dummyImage,
    navigationEndpoint: "/consultancy/2",
    stats: {
      number: "200%",
      label: "Follower Growth",
    },
  },
  "Web & SEO Optimization": {
    title: "Web & SEO Optimization",
    description:
      "Improve your online visibility and drive organic traffic with our comprehensive SEO strategies. We optimize your website to rank higher in search results and attract qualified leads.",
    buttonText: "Boost Rankings",
    image: dummyImage,
    navigationEndpoint: "/consultancy/3",
    stats: {
      number: "150%",
      label: "Traffic Increase",
    },
  },
  "Digital Advertising": {
    title: "Digital Advertising",
    description:
      "Maximize ROI with targeted digital advertising campaigns across Google, social media, and display networks. We create data-driven campaigns that convert prospects into customers.",
    buttonText: "Start Campaign",
    image: dummyImage,
    navigationEndpoint: "/consultancy/4",
    stats: {
      number: "400%",
      label: "ROI Improvement",
    },
  },
};
