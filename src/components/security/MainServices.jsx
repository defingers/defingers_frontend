import { CloudUpload, Radar, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: CloudUpload,
    title: "Next-Gen MSSP",
    description:
      "AI-driven managed security with a 24×7 SOC, delivering continuous monitoring, threat detection, rapid incident response, and proactive protection across endpoints, networks, cloud infrastructure, applications, and digital identities.",
  },
  {
    icon: Radar,
    title: "System Monitoring",
    description:
      "Comprehensive 24×7 NOC and SOC monitoring for networks, servers, databases, applications, cloud resources, and security systems, ensuring high availability, optimal performance, rapid issue detection, and resilient business operations.",
  },
  {
    icon: ShieldCheck,
    title: "Offshore Development",
    description:
      "Dedicated software engineering teams delivering scalable application development, quality assurance, DevOps, cloud engineering, and ongoing support to accelerate innovation, reduce costs, and bring products to market faster.",
  },
];

const stats = [
    { value: "24×7", label: "Global SOC coverage" },
    { value: "<5 min", label: "Median response time" },
    { value: "10+", label: "Service lines" },
    { value: "100%", label: "Compliance-ready" },
];

const MainServices = () => {
    return (
        <section id="services-section" className="bg-[#fcf3e7] min-h-[100vh] px-4 py-16 sm:px-6 lg:px-10 lg:py-12 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-4xl text-left">
                    <h2 className="font-poppins text-3xl font-bold tracking-[-0.03em] text-[#ff8f00] sm:text-4xl lg:text-4xl">
                        Three services. One resilient stack.
                    </h2>
                    <p className="mt-5 max-w-2xl font-outfit text-lg sm:text-lg lg:text-lg leading-7 text-black/80 sm:text-lg sm:leading-8">
                        Managed security, always-on monitoring, and dedicated engineering — designed to integrate
                        seamlessly with the environment you already operate.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="rounded-[1.6rem] border border-[#ff9f1a] bg-white px-5 py-6 shadow-[0_10px_18px_rgba(255,159,26,0.12)] sm:px-6 sm:py-7 lg:px-7 lg:py-8"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff2df] text-[#ff9a15]">
                                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                                </div>

                                <h3 className="mt-8 font-montserrat text-xl font-bold tracking-[-0.02em] text-black sm:text-lg lg:text-xl">
                                    {service.title}
                                </h3>

                                <p className="mt-2 max-w-[34ch] font-outfit text-lg sm:text-lg lg:text-[16px]  text-black/60 sm:text-lg ">
                                    {service.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
            <section className="bg-[#fcf3e7] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-8 mt-20">
                <div className="mx-auto flex max-w-7xl justify-center">
                    <div className="w-full rounded-4xl bg-[linear-gradient(90deg,#f8b957_0%,#ff9d0f_100%)] px-6 py-8 shadow-[0_14px_28px_rgba(255,157,15,0.18)] sm:px-10 sm:py-10 lg:px-16 lg:py-12">
                        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center justify-center">
                                    <div className="font-poppins text-xl font-extrabold leading-none tracking-[-0.04em] text-black sm:text-lg lg:text-4xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 max-w-max font-poppins text-xl leading-6 text-black sm:text-lg lg:text-md">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
};

export default MainServices;

