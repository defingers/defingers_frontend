
import "./HeroSection.css";
import RobotHand from "../assets/images/robotHand.png";

const HeroSection = () => {
  
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left px-12">
          <h1 className="hero-heading">
            <span className="black">Transform</span>{" "}
            <span className="orange">Your Cloud Journey.</span>{" "}
            <span className="orange">We Build, Scale</span>{" "}
            <span className="black">& Secure.</span>
          </h1>

          <p className="hero-subtext">
            Accelerate your digital transformation with secure, scalable, and
            future-ready cloud solutions.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-orange">Learn More</button>
            <button className="btn btn-gold">Get Started</button>
          </div>
        </div>

        {/* RIGHT SIDE (curvy container) */}
        <div className="hero-right">
          <div className="hero-right-content">
            <div className="hero-image-wrapper">
              <img src={RobotHand} alt="Hand" className="hero-image" />
              </div>
            <p className="hero-caption">
            Your Trusted Hand in IT & Consulting Solutions
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
