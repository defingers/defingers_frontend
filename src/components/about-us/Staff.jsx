import React from "react";
import { FaLinkedin } from "react-icons/fa";
import staff1 from "../../assets/images/staff.png";
import staff2 from "../../assets/images/staff.png";
import staff3 from "../../assets/images/staff.png";
import staff4 from "../../assets/images/staff.png";
import staff5 from "../../assets/images/staff.png";
import staff6 from "../../assets/images/staff.png";
import staff7 from "../../assets/images/staff.png";

const STAFF = [
  {
    name: "Ritesh",
    title: "Full Stack Developer",
    image: staff1,
    linkedin: "#"
  },
  {
    name: "Ritesh",
    title: "Full Stack Developer",
    image: staff2,
    linkedin: "#"
  },
  {
    name: "Ritesh",
    title: "Full Stack Developer",
    image: staff3,
    linkedin: "#"
  },
  {
    name: "Ritesh",
    title: "Full Stack Developer",
    image: staff4,
    linkedin: "#"
  },
  {
    name: "Chandrika",
    title: "UI/UX Designer",
    image: staff5,
    linkedin: "#"
  },
  {
    name: "Nishitha",
    title: "Digital Manager",
    image: staff6,
    linkedin: "#"
  },
  {
    name: "Thanmai",
    title: "E-mail Marketing",
    image: staff7,
    linkedin: "#"
  },
];

const getGrid = () => [
  [null, 0, null],
  [1, 2, 3],
  [4, 5, 6]
];

const StaffCard = ({ name, title, image, linkedin }) => (
  <div className="relative bg-white rounded-2xl shadow-sm flex flex-col items-center p-2 max-w-[170px] min-w-[150px]">
    <img
      src={image}
      alt={name}
      className="rounded-2xl w-[120px] h-[140px] object-cover mb-2"
    />
    <div className="absolute left-2 bottom-16 flex flex-row items-center gap-1">
      <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded font-outfit">{name}</span>
      <span className="bg-black text-yellow-400 text-xs font-bold px-2 py-1 rounded font-outfit">{title}</span>
    </div>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-14 text-xs text-black/70 underline flex items-center gap-1"
    >
      View linkedin Profile <FaLinkedin className="text-base" />
    </a>
  </div>
);

const Staff = () => (
  <section className="bg-[#fcf3e8] w-full py-16 px-4 flex flex-col items-center min-h-[500px]">
    <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4 font-poppins text-center">
      Meet Our Staff
    </h2>
    <p className="text-base md:text-lg font-outfit text-black/90 text-center max-w-md mb-10">
      Our skilled professionals each bring unique expertise and passion to deliver exceptional results for our clients.
    </p>
    <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-8">
        {getGrid().map((row, i) =>
          row.map((idx, j) =>
            idx !== null ? (
              <div key={idx} className="flex justify-center items-center">
                <StaffCard {...STAFF[idx]} />
              </div>
            ) : (
              <div key={`${i}-${j}`}></div>
            )
          )
        )}
      </div>
    </div>
  </section>
);

export default Staff;