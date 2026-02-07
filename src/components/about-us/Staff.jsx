import React from "react";
import { FaLinkedin } from "react-icons/fa";
import staff1 from "../../assets/team_members/Shahanaz_photo.jpg";
import staff2 from "../../assets/team_members/richard.jpeg";
import staff3 from "../../assets/team_members/Manjari1.jpg";
import staff4 from "../../assets/team_members/Maheshwari.jpeg";
import staff5 from "../../assets/team_members/Harshini.jpg";
import staff6 from "../../assets/team_members/Tharshith1.jpg";
import staff7 from "../../assets/team_members/Akkshay.jpeg";

// Staff data
const STAFF = [
  {
    name: "Shahanaz",
    title: "Sr Talent Acquisition",
    image: staff1,
    linkedin: "https://www.linkedin.com/in/shahanaz-shaik-686002339/"
  },
  {
    name: "Richard",
    title: "Cloud Specilist",
    image: staff2,
    linkedin: "https://www.linkedin.com/in/richard-boaz/"
  },
  {
    name: "Manjari",
    title: "Business Development",
    image: staff3,
    linkedin: "https://www.linkedin.com/in/manjarichava/"
  },
  {
    name: "Maheshwari",
    title: "Business Development",
    image: staff4,
    linkedin: "https://www.linkedin.com/in/maheshwari-madana-162486254"
  },
  {
    name: "Harshini",
    title: "Talent Acquisition",
    image: staff5,
    linkedin: "https://www.linkedin.com/in/harshini-thota-51b058256"
  },
  {
    name: "Tharshith",
    title: "Talent Acquisition",
    image: staff6,
    linkedin: "https://www.linkedin.com/in/sai-tharshith-karneedi-1b649b205"
  },
  {
    name: "Akshay",
    title: "Talent Acquisition",
    image: staff7,
    linkedin: " https://www.linkedin.com/in/akshay-deolankar-a26455385"
  },
];

// Card component
const StaffCard = ({ name, title, image, linkedin }) => (
  <div className="relative flex flex-col items-center ">
    <img
      src={image}
      alt={name}
      className="rounded-2xl border-gray-500 border-2 w-[200px] h-[240px] object-cover mb-2"
    />
    <div className="absolute bottom-10 flex flex-row items-center gap-1 bg-black bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-2xl font-outfit">
      <span className="bg-orange-400 text-xs  font-semibold px-2 py-1 rounded-xl font-outfit">{name}</span>
      {title}
    </div>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="bottom-16 text-xs text-black font-bold flex items-center gap-1"
    >
      View linkedin Profile <FaLinkedin className="text-base" />
    </a>
  </div>
);

// Main Staff section
const Staff = () => (
  <section className="bg-[#fcf3e8] w-full py-16 px-4 flex flex-col " id="our-team">
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto ">
      {/* Left Side: Title and Description */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:mb-0 md:mr-16">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4 font-poppins text-center md:text-left ">
          Meet Our Team
        </h2>
        <p className="text-base md:text-lg font-outfit text-black/ text-center md:text-left max-w-md mb-10">
          Our skilled professionals each bring unique expertise and passion to deliver exceptional results for our clients.
        </p>
      </div>
      {/* Right Side: Staff Cards Grid */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Mobile: 2 cards per row, Desktop: custom absolute grid */}
        <div className="block md:hidden w-full">
          <div className="grid grid-cols-2 gap-6">
            {STAFF.map((member, idx) => (
              <div key={idx} className="flex justify-center items-center">
                <StaffCard {...member} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block relative min-w-[700px] min-h-[900px]">
          {/* Column 1 */}
          <div className="absolute  top-[150px] right-[500px] flex flex-col gap-5">
            <StaffCard {...STAFF[0]} />
            <StaffCard {...STAFF[4]} />
          </div>
          {/* Column 2 */}
          <div className="absolute left-[250px]  flex flex-col gap-5">
            <StaffCard {...STAFF[1]} />
            <StaffCard {...STAFF[5]} />
            <StaffCard {...STAFF[6]} />
          </div>
          {/* Column 3 */}
          <div className="absolute left-[500px] top-[150px]  flex flex-col gap-5">
            <StaffCard {...STAFF[2]} />
            <StaffCard {...STAFF[3]} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Staff;


