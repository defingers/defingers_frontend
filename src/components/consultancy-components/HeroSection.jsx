import Button from '../../ui/Button';
import Images from '../../assets/images/index';

const HeroSection = ({ consultancyContent }) => {
    return (
        <section
            className="hero relative bg-cover bg-center h-[70vh] flex items-center justify-start pt-16"
            style={{ backgroundImage: `url(${Images.cloudMigration})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full pl-4 md:pl-16 px-4 md:px-0">
                <h1 className="text-white text-3xl md:text-6xl font-extrabold mb-4 md:mb-8 font-poppins">{consultancyContent.consultancyName}</h1>
                <p className="text-white text-lg md:text-4xl mb-6 md:mb-10 max-w-xs md:max-w-xl font-outfit">
                    {consultancyContent.consultancyDescription}
                </p>
                <Button
                    color="orange"
                    className="w-full md:w-80 font-outfit"
                >
                    Talk to a Recruitment Consultant 
                </Button>
            </div>
        </section>
    );
};


export default HeroSection;
