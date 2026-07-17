import {
  ShieldCheck,
  Bug,
  GraduationCap,
  CloudUpload,
  Radar,
  FileCheck,
  Cpu,
  Briefcase,
  Search,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Managed SOC",
    description: "24/7 Security Operations Center for continuous threat monitoring and incident response.",
    points: [
      "Threat monitoring",
      "Incident response",
      "Security alerts",
      "Log analysis",
    ],
  },
  {
    icon: Bug,
    number: "02",
    title: "VAPT Services",
    description: "Identify vulnerabilities through comprehensive penetration testing and security assessments.",
    points: [
      "Network penetration testing",
      "Web application testing",
      "Mobile application testing",
      "Cloud security assessments",
    ],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Security Training",
    description: "Build a security-aware workforce through training and phishing simulations.",
    points: [
      "Phishing simulation campaigns",
      "Employee training programs",
      "Security certifications",
      "Compliance awareness",
    ],
  },
  {
    icon: CloudUpload,
    number: "04",
    title: "Cloud Security",
    description: "Secure cloud infrastructure with audits, IAM, and Kubernetes protection.",
    points: [
      "AWS, Azure & Google Cloud security reviews",
      "Cloud configuration audits",
      "Identity & Access Management (IAM)",
      "Container & Kubernetes security",
    ],
  },
  {
    icon: Radar,
    number: "05",
    title: "Managed MDR",
    description: "Advanced detection, response, and proactive threat hunting for modern enterprises.",
    points: [
      "Threat hunting",
      "Endpoint detection & response",
      "Malware analysis",
      "Incident containment",
    ],
  },
  {
    icon: FileCheck,
    number: "06",
    title: "Risk & Compliance",
    description: "Meet industry regulations and strengthen your organization's security posture.",
    points: [
      "ISO 27001 implementation",
      "SOC 2 readiness",
      "PCI-DSS compliance",
      "GDPR & privacy assessments",
    ],
  },
  {
    icon: Cpu,
    number: "07",
    title: "Security SaaS",
    description: "Develop scalable cybersecurity platforms powered by AI and automation.",
    points: [
      "Attack surface monitoring",
      "Security posture management",
      "Vulnerability management platform",
      "Phishing detection platform",
      "AI-powered threat detection",
    ],
  },
  {
    icon: Briefcase,
    number: "08",
    title: "SME Protection",
    description: "Affordable managed cybersecurity solutions designed for growing businesses.",
    points: [
      "Endpoint protection",
      "Email security",
      "Backup monitoring",
      "Monthly security reports",
      "Virtual CISO service",
    ],
  },
  {
    icon: Search,
    number: "09",
    title: "Digital Forensics",
    description: "Investigate cyber incidents, preserve evidence, and accelerate recovery.",
    points: [
      "Malware investigation",
      "Insider threat investigations",
      "Evidence collection",
      "Recovery planning",
    ],
  },
];


const ServicesSection = () => {
    return (
        <section id="what-we-do-section" className="bg-[#fcf3e7] px-4 py-16 sm:px-6 lg:px-10 lg:py-20 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-xl text-left">
                        <h2 className="font-poppins text-3xl font-bold tracking-[-0.03em] text-[#ff8f00] sm:text-4xl lg:text-4xl">
                            End-to-end cybersecurity, services.
                        </h2>
                    </div>

                    <p className="mt-5 max-w-lg font-outfit text-lg sm:text-md lg:text-lg leading-7 text-black/80 sm:leading-8">
                        From 24×7 monitoring and pen testing to AI security and virtual
                        CISO — ten capability areas, one accountable partner.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (

                            <article
                                key={service.number}
                                className=" relative rounded-2xl border border-[#ff9f1a] bg-white px-5 py-6 shadow-[0_10px_18px_rgba(255,159,26,0.12)] sm:px-6 sm:py-7 lg:px-7 lg:py-8"
                            >

                                <span className="absolute right-6 top-5 font-outfit text-xs font-medium text-black/70 lg:text-sm">
                                    {service.number}
                                </span>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff2df] text-[#ff9a15]">
                                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                                </div>

                                <h3 className="mt-8 font-montserrat text-xl font-bold tracking-[-0.02em] text-black sm:text-lg lg:text-xl">
                                    {service.title}
                                </h3>

                                <p className="mt-2 max-w-[34ch] font-outfit text-lg sm:text-lg lg:text-[16px]  text-black/60 sm:text-lg ">
                                    {service.description}
                                </p>

                                <ul className="mt-5 space-y-3">
                                    {service.points.map((point) => (
                                        <li key={point} className="flex items-center gap-3 font-outfit text-lg sm:text-lg lg:text-[16px]  text-black/80 sm:text-lg">
                                            <span className="h-2 w-2 rounded-full bg-[#ff9a15]" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};

export default ServicesSection;

