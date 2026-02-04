import MilestoneCard from "./MilestoneCard"
import "./StoryAchievementSection.css"
import groupImage from "../../assets/team_members/gp.png"
const StoryAchievementSection = () => {
  const milestones = [
    {
      number: "1",
      title: "Founded",
      description: "Started as a small team with big dreams and a passion for technology"
    },
    {
      number: "2", 
      title: "Build",
      description: "We'll help you design your ideal resident benefits package."
    },
    {
      number: "3",
      title: "Build", 
      description: "We'll help you design your ideal resident benefits package."
    },
    {
      number: "4",
      title: "Build",
      description: "We'll help you design your ideal resident benefits package."
    }
  ];

  return (
  <div className="relative" style={{ backgroundColor: '#FDEDAF' }}>
      {/* Curved Background */}
      <div className="curved-background">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M0 0L1200 0L1200 400C1200 400 800 500 600 400C400 300 200 500 0 400L0 0Z"
            fill="#FDEDAF"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-16 py-10">
          <h1 className="text-l sm:text-1xl md:text-2xl lg:text-3xl font-bold text-[#FF8C00] mb-2">
            Our Story & Achievement
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between business objectives and technology 
            solutions, we've grown into a trusted partner for organizations worldwide.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto relative z-20">
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={index}
              number={milestone.number}
              title={milestone.title}
              description={milestone.description}
            />
          ))}
        </div>

        {/* Image Section */}
        <div className="image-section-responsive w-full mx-auto -mt-16 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 mx-4">
            <img 
              src={groupImage}
              alt="Team meeting in conference room"
              className="w-full h-auto max-h-96 sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-none md:object-none mx-auto"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='400' y='200' font-family='Arial, sans-serif' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3ETeam Meeting Image%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryAchievementSection;