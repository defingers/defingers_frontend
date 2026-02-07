import dummyImage from "../../assets/navbar_dummy/dummy_dropdown.svg";
import Images from "../../assets/images";
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
  FaBullhorn,
  FaHashtag,
  FaSearch,
  FaAd,
  FaCheckCircle,
  FaTachometerAlt,
  FaBrain,
  FaWrench,
  FaUsers,
  FaMoneyBillWave,
  FaClipboardList,
  FaUserPlus,
} from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
export const categories = [
  {
    name: "AI and Data Services",
    icon: FaServer,
    items: [
      { name: "Data Engineering", icon: FaCloud, navigationEndpoint: "/ai-data/1" },
      { name: "Analytics & Visualization", icon: FaNetworkWired, navigationEndpoint: "/ai-data/2" },
      { name: "Generative AI/ML", icon: FaDatabase, navigationEndpoint: "/ai-data/3" },
      { name: "Enterprise Management", icon: FaRocket, navigationEndpoint: "/ai-data/4" },
    ],
  },
  {
    name: "Cloud and Infrastructure",
    icon: TbCloudComputing,
    items: [
      { name: "Cloud Transformation", icon: FaChartLine, navigationEndpoint: "/cloud/1" },
      { name: "DevOps & CloudOps", icon: FaCogs, navigationEndpoint: "/cloud/2" },
      { name: "Cyber Security Services", icon: FaShieldAlt, navigationEndpoint: "/cloud/3" },
      { name: "Infrastructure Management", icon: FaCode, navigationEndpoint: "/cloud/4" },
    ],
  },
  {
    name: "Digital Marketing Services",
    icon: FaLightbulb,
    items: [
      { name: "Content Marketing", icon: FaBullhorn, navigationEndpoint: "/marketing/1" },
      { name: "Social Media Management", icon: FaHashtag, navigationEndpoint: "/marketing/2" },
      { name: "Web & SEO Optimization", icon: FaSearch, navigationEndpoint: "/marketing/3" },
      { name: "Digital Advertising", icon: FaAd, navigationEndpoint: "/marketing/4" },
    ],
  },
  {
    name: "Quality Assurance Services",
    icon: FaTools,
    items: [
      { name: "Test Automation", icon: FaCheckCircle, navigationEndpoint: "/qa/1" },
      { name: "Performance Engineering", icon: FaTachometerAlt, navigationEndpoint: "/qa/2" },
      { name: "AI - Augumented Testing", icon: FaBrain, navigationEndpoint: "/qa/3" },
      { name: "QA Tools & Accelerators", icon: FaWrench, navigationEndpoint: "/qa/4" },
    ],
  },
  {
    name: "Staffing and Consulting Services",
    icon: IoPersonSharp,
    items: [
      { name: "Resource Consulting", icon: FaUsers, navigationEndpoint: "/staffing/1" },
      { name: "Payroll Management", icon: FaMoneyBillWave, navigationEndpoint: "/staffing/2" },
      { name: "Bench Management", icon: FaClipboardList, navigationEndpoint: "/staffing/3" },
      { name: "Talent Acquisition", icon: FaUserPlus, navigationEndpoint: "/staffing/4" },
    ],
  },
];
export const contentData = {
  "Data Engineering": {
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure to process, transform, and manage large-scale data efficiently. Our data engineering solutions ensure reliable data flow, quality, and accessibility for analytics and AI initiatives.",
    buttonText: "Learn More",
    image: Images.dataEngineeringAndManagement,
    navigationEndpoint: "/ai-data/1",
    stats: {
      number: "10x",
      label: "Data Processing Speed",
    },
  },
  "Analytics & Visualization": {
    title: "Analytics & Visualization",
    description:
      "Transform raw data into actionable insights with advanced analytics and intuitive visualizations. Make data-driven decisions that propel your business forward with comprehensive analytics solutions.",
    buttonText: "Discover Insights",
    image: Images.dataAnalytics,
    navigationEndpoint: "/ai-data/2",
    stats: {
      number: "5x",
      label: "Faster Decisions",
    },
  },
  "Generative AI/ML": {
    title: "Generative AI/ML",
    description:
      "Harness the power of generative AI and machine learning to automate processes, enhance creativity, and unlock new possibilities for innovation and business growth.",
    buttonText: "Explore AI",
    image: Images.AI_ml,
    navigationEndpoint: "/ai-data/3",
    stats: {
      number: "10x",
      label: "Productivity Boost",
    },
  },
  "Enterprise Management": {
    title: "Enterprise Management",
    description:
      "Centralize and manage your enterprise data with robust governance, quality controls, and security. Ensure data accuracy, consistency, and compliance across the organization.",
    buttonText: "Manage Data",
    image: Images.EnterpriseDataManagement,
    navigationEndpoint: "/ai-data/4",
    stats: {
      number: "85%",
      label: "Data Quality",
    },
  },
  // Cloud and Infrastructure Services
  "Cloud Transformation": {
    title: "Cloud Transformation",
    description:
      "Seamlessly migrate your infrastructure to the cloud with zero downtime. Our certified experts ensure a smooth transition, maximizing performance and minimizing disruption.",
    buttonText: "Start Migration",
    image: Images.CloudTransformation,
    navigationEndpoint: "/cloud/1",
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
    image: Images.DevOpsCloudOps,
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
    image: Images.CyberSecurityServices,
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
    image: Images.InfrastructureManagement,
    navigationEndpoint: "/cloud/4",
    stats: {
      number: "99.9%",
      label: "Uptime Guarantee",
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
    image: Images.ContentMarketing,
    navigationEndpoint: "/marketing/1",
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
    image: Images.SocialMediaManagement,
    navigationEndpoint: "/marketing/2",
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
    image: Images.WebSEOOptimization,
    navigationEndpoint: "/marketing/3",
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
    image: Images.DigitalAdvertising,
    navigationEndpoint: "/marketing/4",
    stats: {
      number: "400%",
      label: "ROI Improvement",
    },
  },
  // Quality Assurance Services
  "Test Automation": {
    title: "Test Automation",
    description:
      "Accelerate testing with intelligent automation frameworks. Reduce testing cycles by 70% while improving test coverage and reliability with comprehensive automation solutions.",
    buttonText: "Automate Testing",
    image: Images.TestAutomation,
    navigationEndpoint: "/qa/1",
    stats: {
      number: "70%",
      label: "Faster Testing",
    },
  },
  "Performance Engineering": {
    title: "Performance Engineering",
    description:
      "Ensure your applications perform flawlessly under any load. Conduct comprehensive performance testing to identify bottlenecks and optimize response times.",
    buttonText: "Test Performance",
    image: Images.PerformanceEngineering,
    navigationEndpoint: "/qa/2",
    stats: {
      number: "60%",
      label: "Faster Response Times",
    },
  },
  "AI - Augumented Testing": {
    title: "AI-Augmented Testing",
    description:
      "Leverage AI and ML to revolutionize software testing. Self-healing test scripts and intelligent defect detection reduce maintenance by 80% while improving quality.",
    buttonText: "Explore AI Testing",
    image: Images.AIAugmentedTesting,
    navigationEndpoint: "/qa/3",
    stats: {
      number: "80%",
      label: "Reduced Maintenance",
    },
  },
  "QA Tools & Accelerators": {
    title: "QA Tools & Accelerators",
    description:
      "Powerful testing tools and frameworks to accelerate quality delivery. Pre-built frameworks and reusable components reduce automation setup time by 50%.",
    buttonText: "View Tools",
    image: Images.QAToolsAccelerators,
    navigationEndpoint: "/qa/4",
    stats: {
      number: "50%",
      label: "Faster Setup",
    },
  },
  // Staffing and Consulting Services
  "Resource Consulting": {
    title: "Resource Consulting",
    description:
      "Connect with top IT talent to drive your technology initiatives. We source, vet, and place highly skilled professionals who match your technical requirements and company culture.",
    buttonText: "Find Talent",
    image: Images.ITStaffing,
    navigationEndpoint: "/staffing/1",
    stats: {
      number: "20+",
      label: "Professionals Placed",
    },
  },
  "Payroll Management": {
    title: "Payroll Management",
    description:
      "Streamline payroll processing with comprehensive management services. Automated systems ensure accurate, on-time payments with full tax compliance and reporting.",
    buttonText: "Learn More",
    image: Images.PayrollManagement,
    navigationEndpoint: "/staffing/2",
    stats: {
      number: "99.9%",
      label: "Payroll Accuracy",
    },
  },
  "Bench Management": {
    title: "Bench Management",
    description:
      "Optimize your bench resources and maximize utilization rates. Strategic placement and upskilling programs reduce idle time and improve resource productivity.",
    buttonText: "Optimize Resources",
    image: Images.BenchManagement,
    navigationEndpoint: "/staffing/3",
    stats: {
      number: "85%",
      label: "Utilization Rate",
    },
  },
  "Talent Acquisition": {
    title: "Talent Acquisition",
    description:
      "Strategic talent acquisition to build high-performing teams. End-to-end services from workforce planning and employer branding to screening and onboarding.",
    buttonText: "Build Your Team",
    image: Images.TalentAcquisition,
    navigationEndpoint: "/staffing/4",
    stats: {
      number: "95%",
      label: "Success Rate",
    },
  },
};
