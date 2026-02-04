import React from "react";
import { FaLinkedin } from "react-icons/fa";
import leaderImg3 from "../../assets/team_members/suninFinal.jpeg";
import leaderImg2 from "../../assets/team_members/primrosefinal.jpeg";
import leaderImg1 from "../../assets/team_members/hnNaidufinal.jpeg"

const leaders = [
    {
        name: "H N Naidu",
        role: "Managing Director",
        expertise: "Executive Leadership",
        description: "Strategic leader with expertise in business direction and critical decision-making for organizational growth.",
        image: leaderImg1,
    },
    {
        name: "Primrose P",
        role: "Founder & Director",
        expertise: "Chief Administrative Officer",
        description: "Visionary founder driving operational excellence and administrative strategies to ensure seamless business operations.",
        image: leaderImg2,
    },
    {
        name: "Sunin Seeti",
        role: "Technology Head-IT",
        expertise: "Technical Expert",
        description: "Technology innovator leading IT infrastructure and digital transformation initiatives with hands-on technical expertise.",
        image: leaderImg3,
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
                                className="w-full h-full "
                            />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-bold text-lg mb-1 font-poppins">{leader.name}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                                <div className="text-orange-500 font-bold text-sm font-outfit">{leader.role}</div>
                                <span className="text-yellow-400 font-bold text-sm font-outfit">{leader.expertise}</span>
                            </div>
                            <p className="text-black text-sm font-outfit mb-3">{leader.description}</p>
                            {/* <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-black font-semibold mt-auto font-outfit text-sm"
                            >
                                <FaLinkedin className="text-xl" />
                                linkedin Profile
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Leadership;
