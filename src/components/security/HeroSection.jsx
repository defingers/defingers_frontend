import { Fingerprint } from "lucide-react";

const metrics = [
    { label: "Threats blocked (24h)", value: "99.8%" },
    { label: "Endpoints monitored", value: "100%" },
    { label: "Mean time to respond", value: "45%" },
    { label: "Cloud accounts hardened", value: "94%" },
];

const HeroSection = () => {
    return (
        <section className="bg-[#fcf3e7] min-h-[100vh] px-4 sm:px-6 py-8 md:py-12 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 w-full">


                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col  items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                    <div className="w-full max-w-2xl lg:flex-1 lg:max-w-none">
                        <h1 className="font-poppins text-left text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-5xl">
                            Cybersecurity that
                            <span className="block sm:inline"> stays </span>
                            <br />
                            <span className="block mr-3 sm:inline italic text-[#ff9a15]">one move</span>
                            <span className="block sm:inline"> ahead.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-left font-outfit text-lg leading-8 text-black/85 sm:text-xl lg:text-lg">
                            A next-generation Managed Security Services Provider combining AI-driven
                            analytics, decades of threat intelligence, and a global SOC — protecting
                            endpoints, networks, cloud, applications, and identities so you can focus
                            on the business.
                        </p>

                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start lg:items-start sm:gap-6">
                            <div className="hero-buttons w-full sm:w-auto flex justify-center">
                                <a href="#services-section" className="btn btn-gold w-full sm:w-auto text-center">
                                    Explore Services
                                </a>
                            </div>
                            <div className="hero-buttons w-full sm:w-auto flex justify-center">
                                <a href="#what-we-do-section" className="btn btn-gold w-full sm:w-auto text-center">
                                    What We Do
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[500px] lg:flex-[450px]">
                        <div className="rounded-4xl border border-[#f0b13a] bg-white/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-7">
                            <div className="flex items-center justify-between gap-4 text-sm font-medium text-black/80 font-poppins">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#ffba3d]" />
                                    <span>SOC — Live</span>
                                </div>
                                <span>Region: Global</span>
                            </div>

                            <div className="mt-10 space-y-4">
                                {metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="flex items-center justify-between rounded-2xl border border-[#ffbf39] bg-[#fff8ee] px-6 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                                    >
                                        <span className="font-poppins  text-lg sm:text-xl lg:text-sm text-black ">{metric.label}</span>
                                        <span className="font-poppins text-lg sm:text-xl lg:text-sm font-medium text-black">{metric.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 rounded-2xl bg-[#ff9620] px-5 py-2 text-black shadow-[0_10px_20px_rgba(255,150,32,0.28)] sm:px-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 rounded-full bg-black/5 p-2">
                                        <Fingerprint className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <div className="font-poppins text-lg font-medium sm:text-lg">Threat hunt in progress</div>
                                        <div className="font-outfit text-sm leading-6 sm:text-sm">
                                            Analyst reviewing anomalous auth pattern — customer notified.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HeroSection;
