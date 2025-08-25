import checkmark from '../../assets/icons/checkmark.svg';
import cloudService from '../../assets/images/cloud-service.png';

const ServiceTransition = () => {
    return (
        <section className="service-transition md:p-25 py-10 md:py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-0">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-poppins text-center md:text-left">
                        Transition to the Cloud with Confidence
                    </h2>
                    <p className="mb-6 md:mb-8 font-outfit text-base md:text-lg" style={{ fontSize: '16px' }}>
                        Cloud migration is more than just moving data; it's about transforming your business. Our expert team ensures a smooth, secure, and efficient transition to leading cloud platforms like AWS, Azure, and Google Cloud. We handle every aspect of the migration process, from initial assessment and planning to post-migration optimization and management.
                        <br /><br />
                        Our goal is to empower your business with the scalability, flexibility, and cost-efficiency of the cloud, while minimizing disruption to your ongoing operations. We tailor every migration project to your specific needs, ensuring your applications and data are securely and effectively moved to their new cloud environment.
                    </p>
                    <div>
                        <ul>
                            <li className='mt-4 font-outfit flex items-center'>
                                <img src={checkmark} alt="" className="inline-block w-5 h-5 mr-2 align-middle" />
                                End-to-End Migration Strategy
                            </li>
                            <li className='mt-4 font-outfit flex items-center'>
                                <img src={checkmark} alt="" className="inline-block w-5 h-5 mr-2 align-middle" />
                                Multi-Cloud & Hybrid Solutions
                            </li>
                            <li className='mt-4 font-outfit flex items-center'>
                                <img src={checkmark} alt="" className="inline-block w-5 h-5 mr-2 align-middle" />
                                Post-Migration Performance Tuning
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                    <img
                        src={cloudService}
                        alt="Cloud Migration"
                        className="w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mt-8 md:mt-0 rounded-lg object-cover "
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceTransition;
