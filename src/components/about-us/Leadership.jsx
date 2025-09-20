import React from "react";
import { FaLinkedin } from "react-icons/fa";
import leaderImg from "../../assets/images/image7.png";

const leaders = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        expertise: "Cloud Architecture",
        description: "Expert in cloud migration and enterprise security solutions with proven track record.",
        linkedin: "#",
        image: leaderImg,
    },
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        expertise: "Cloud Architecture",
        description: "Expert in cloud migration and enterprise security solutions with proven track record.",
        linkedin: "#",
        image: leaderImg,
    },
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        expertise: "Cloud Architecture",
        description: "Expert in cloud migration and enterprise security solutions with proven track record.",
        linkedin: "#",
        image: leaderImg,
    },
];

const Leadership = () => (
    <section className="w-full bg-[#f9f1e5] py-12 px-2 sm:px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-2 font-poppins">
                Meet Our Leadership Team
            </h2>
            <div className="w-40 h-1 bg-yellow-400 mx-auto mb-10 rounded"></div>
            <div className="flex flex-wrap justify-center gap-10">
                {leaders.map((leader, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-[20px] border-1 border-yellow-400 overflow-hidden flex flex-col w-[270px] shadow-sm"
                    >
                        <div className="w-full h-[180px] bg-gray-200">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-bold text-lg mb-1 font-poppins">{leader.name}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                                <span className="text-orange-500 font-bold text-sm font-outfit">{leader.role}</span>
                                <span className="text-yellow-400 font-bold text-sm font-outfit">{leader.expertise}</span>
                            </div>
                            <p className="text-black text-sm font-outfit mb-3">{leader.description}</p>
                            <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-black font-semibold mt-auto font-outfit text-sm"
                            >
                                <FaLinkedin className="text-xl" />
                                linkedin Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Leadership;
