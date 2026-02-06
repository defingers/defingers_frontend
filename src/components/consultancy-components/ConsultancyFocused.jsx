import Images from '../../assets/images/index';

const ConsultancyFocused = ({ consultancyContent }) => {
    return (
        <section className="service-transition md:p-25 py-10 md:py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:items-center gap-8 md:gap-12 px-4 md:px-0">
                <div className="md:w-1/2 w-full flex flex-col justify-start items-start">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-poppins text-left">
                       {consultancyContent.consultancyFocused.headingTag}
                    </h2>
                    <p className="mb-6 md:mb-8 font-outfit text-base md:text-lg text-left" style={{ fontSize: '16px' }}>
                        {consultancyContent.consultancyFocused.content.desc}
                    </p>

                    <div className='border p-4 rounded-lg border-gray-300 flex flex-col items-center w-full font-outfit bg-gray-100'>
                        <span className='text-base md:text-3xl font-bold text-orange-400'>{consultancyContent.consultancyFocused.content.highliter}</span>
                    </div>
                </div>
                {/* <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                    <img
                        src={Images.ItFocused}
                        alt="IT Focused"
                        className="w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mt-8 md:mt-0 rounded-lg "
                    />
                </div> */}
            </div>
        </section>
    );
};

export default ConsultancyFocused;

