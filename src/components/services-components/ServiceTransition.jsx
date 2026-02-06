import icons from '../../assets/icons';
import Images from '../../assets/images';

const ServiceTransition = ({ serviceContent }) => {
    return (
        <section className="service-transition md:p-25 py-10 md:py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-0">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-poppins text-center md:text-left">
                        {serviceContent.serviceTransition.HeadingTag}
                    </h2>
                    <p className="mb-6 md:mb-8 font-outfit text-base md:text-lg" style={{ fontSize: '16px' }}>
                        {serviceContent.serviceTransition.content.phase1}
                        <br /><br />
                        {serviceContent.serviceTransition.content.phase2}
                    </p>
                    <div>
                        <ul>
                            {serviceContent.serviceTransition.bulletContent.map((item, index) => (
                                <li key={index} className='mt-4 font-outfit flex items-center'>
                                    <img src={icons[serviceContent.serviceTransition.content.checkmarkIcon]} alt="" className="inline-block w-5 h-5 mr-2 align-middle" />
                                    {item}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                    <img
                        src={serviceContent.serviceTransition.cartoonImage ? Images[serviceContent.serviceTransition.cartoonImage] : Images[serviceContent.serviceTransition.serviceTransitionImage]}
                        alt={serviceContent.serviceName}
                        className="w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mt-8 md:mt-0 rounded-lg object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceTransition;
