import React from "react";
import bulb from "../../assets/icons/bulb.png";
import target from "../../assets/icons/target.svg";

const values = [
    {
        icon: target,
        title: "Innovation First",
        desc: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    },
    {
        icon: target,
        title: "Client Success",
        desc: "Your success is our success. We're committed to delivering results that exceed expectations.",
    },
    {
        icon: target,
        title: "Integrity",
        desc: "We operate with complete transparency, honesty, and ethical standards in all our interactions.",
    },
    {
         icon: target,
        title: "Continuous Learning",
        desc: "We stay ahead of technology trends and continuously evolve our expertise and methodologies.",
    },
    {
        icon: target,
        title: "Collaborative Partnership",
        desc: "We work as an extension of your team, fostering collaboration and knowledge sharing.",
    },
    {
        icon: target,
        title: "Quality Excellence",
        desc: "We maintain the highest standards in every project, ensuring robust and scalable solutions.",
    },
];

const CoreValues = () => (
    <section className="w-full py-12 px-2 sm:px-6 bg-white ">
        <div className="max-w-6xl mx-auto p-3">
            <h2 className="text-4xl font-bold text-center mb-2 font-poppins">
                Our Core Values
            </h2>
            <div className="w-40 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto font-outfit">
                These principles guide everything we do and shape how we deliver exceptional IT consultancy services to our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((v, i) => (
                    <div
                        key={i}
                        className="border-2 border-yellow-200 rounded-xl p-4 sm:p-6 bg-white flex flex-col items-start shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={v.icon}
                            alt="icon"
                            className="w-15 h-15 mb-4"
                        />
                        <h3 className="font-bold text-lg mb-2 font-montserrat">{v.title}</h3>
                        <p className="text-gray-700 font-outfit">{v.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


export default CoreValues;
