import Images from '../../assets/images/index';

const WhyChooseConsultancy = ({ consultancyContent }) => {
    return (
        <section className="service-advantage py-10 md:py-16 md:p-25 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-0 ">
                <div className="md:w-1/2 w-full md:mt-8">
                    <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-poppins text-center">
                       {consultancyContent.WhyChooseConsultancy.headingTag}
                    </h2>
                    <p className="mb-6 md:mb-8 font-outfit text-base md:text-lg" style={{ fontSize: '16px' }}>
                        {consultancyContent.WhyChooseConsultancy.content}
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 items-center md:items-start justify-center'>
                       {consultancyContent.WhyChooseConsultancy.chips.map((chip, idx) => (
                           <div
                               key={idx}
                               className={'border p-2 pl-6 pr-6 rounded-full border-gray-300 flex flex-col items-center font-outfit mb-2 md:mb-0'}
                           >
                               <p className="text-orange-400 text-sm md:text-[12px] text-center font-outfit font-bold">{chip}</p>
                           </div>
                       ))}
                      
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src={Images[consultancyContent.consultancyImage]}
                        alt={consultancyContent.consultancyName}
                        className="w-80 h-64 sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[300px] rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseConsultancy;
