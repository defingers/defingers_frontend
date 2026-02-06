import serviceAdvantage from '../../assets/images/cloud-advantage.png';
import Images from '../../assets/images/index';

const ServiceAdvantage = ({ serviceContent }) => {
    return (
        <section className="service-advantage py-10 md:py-16 md:p-25">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-0">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-poppins text-center md:text-left">
                       {serviceContent.serviceAdvantage.headingTag}
                    </h2>
                    <p className="mb-6 md:mb-8 font-outfit text-base md:text-lg" style={{ fontSize: '16px' }}>
                        {serviceContent.serviceAdvantage.content}
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 items-center md:items-start'>
                        {serviceContent.serviceAdvantage.operation.map((item, index) => (
                            <div key={index} className='border p-4 rounded-lg border-gray-200 flex flex-col items-center w-full md:w-[250px] font-outfit'>
                                <span className='text-2xl md:text-3xl font-bold text-orange-400'>{item.Number}</span>
                                <p className="text-base md:text-sm text-center mt-2 ">{item.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src={Images[serviceContent.serviceAdvantage.serviceAdvantageImage]}
                        // alt="Cloud Migration"
                        className="w-80 h-64 sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[300px] rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceAdvantage;
