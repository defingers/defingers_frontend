
const stats = [
    { value: "24×7", label: "Global SOC coverage" },
    { value: "<5 min", label: "Median response time" },
    { value: "10+", label: "Service lines" },
    { value: "100%", label: "Compliance-ready" },
];

const Cta = () => {
    return (
        <section className="bg-[#fcf3e7] px-4 py-12 ">
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
    );
};

export default Cta;

