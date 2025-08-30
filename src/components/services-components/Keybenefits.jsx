import icons from '../../assets/icons/index';


const Keybenefits = ({ serviceContent }) => (
    
    <section className="bg-[#FEF4E8] py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-14 font-poppins text-black">
               {serviceContent.serviceBenefits.headingTag}
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                {serviceContent.serviceBenefits.content.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-3xl shadow-lg border border-gray-200 p-5 flex flex-col items-center w-full md:w-[320px]  max-w-md transition hover:shadow-xl"
                    >

                        <img src={icons[benefit.benefiticons]} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />

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