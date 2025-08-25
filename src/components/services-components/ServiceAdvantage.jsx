import serviceAdvantage from '../../assets/images/cloud-advantage.png';

const ServiceAdvantage = () => {
    return (
        <section className="service-advantage py-10 md:py-16 md:p-25">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-0">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-poppins text-center md:text-left">
                        The Cloud Compass Advantage
                    </h2>
                    <p className="mb-6 md:mb-8 font-outfit text-base md:text-lg" style={{ fontSize: '16px' }}>
                        With certified experts and a portfolio of successful migrations, we are your trusted partner for cloud transformation. We combine technical expertise with a deep understanding of business objectives to deliver solutions that drive real value.
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 items-center md:items-start'>
                        <div className='border p-4 rounded-lg border-gray-200 flex flex-col items-center w-full md:w-[250px] font-outfit'>
                            <span className='text-2xl md:text-3xl font-bold text-orange-400'>100+</span>
                            <p className="text-base md:text-lg text-center mt-2 ">Migrations Completed</p>
                        </div>
                        <div className='border p-4 rounded-lg border-gray-200 font-outfit flex flex-col items-center w-full md:w-[250px]'>
                            <span className='text-2xl md:text-3xl font-bold text-orange-400'>99.9%</span>
                            <p className="text-base md:text-lg text-center mt-2 ">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src={serviceAdvantage}
                        alt="Cloud Migration"
                        className="w-80 h-64 sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[300px] rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceAdvantage;
