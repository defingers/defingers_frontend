import thunder from '../../assets/icons/thunder.svg';
import stock from '../../assets/icons/stock.svg';
import security from '../../assets/icons/security.svg';

const benefits = [
    {
        icon: thunder,
        title: "Zero Downtime",
        desc: "Meticulously planned migrations to ensure business continuity."
    },
    {
        icon: stock,
        title: "Cost Savings",
        desc: "Optimize your IT spend by paying only for the resources you use."
    },
    {
        icon: security,
        title: "Scalable Solutions",
        desc: "Scale your infrastructure on-demand to meet business needs."
    }
];

const Keybenefits = () => (
    <section className="bg-[#FEF4E8] py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-14 font-poppins text-black">
                Unlock Key Cloud Benefits
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                {benefits.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-3xl shadow-lg border border-gray-200 p-5 flex flex-col items-center w-full md:w-[320px]  max-w-md transition hover:shadow-xl"
                    >

                        <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />

                        <h3 className="text-xl font-bold mb-3 text-center text-black font-montserrat">
                            {benefit.title}
                        </h3>
                        <p className="text-sm text-center text-base text-gray-700 font-outfit">
                            {benefit.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Keybenefits;