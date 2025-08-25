import React from "react";
import Button from "../../ui/Button";

const SecondCta = () => (
    <section className="bg-[#FFAF41] py-10 md:py-16 flex items-center justify-center px-4">
        <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6 font-montserrat">
                Ready to Transform Your Cloud Migration?
            </h2>
            <p className="text-base md:text-xl text-white text-center mb-6 md:mb-10 font-montserrat max-w-2xl">
                Let's discuss how our cloud solutions can help you achieve your business goals.
            </p>
            <Button
                color="white"
                className="w-full max-w-xs md:max-w-none md:w-80 font-outfit "
            >
                Book a Consultation
            </Button>
        </div>
    </section>
);

export default SecondCta;
