import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const aboutTextRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    // Define the start and end states for the animation
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: 50 }, // Start state (invisible and slightly down)
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" } // End state (visible and in place)
    );
  }, []);

  return (
    <div>
      <Navbar />

      {/* About Section */}
      <div className="about-section bg-light py-5">
        <div className="container" ref={aboutTextRef}>
          <h1 className="text-center mb-5 text-dark">About Samarambha 2025</h1>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/src/assets/images/about.png" // Ensure this path is correct
                alt="About Samarambha"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <p className="lead text-dark">
                Samarambha 2025 is a college event aimed at fostering community
                spirit and personal growth. Join us for a series of exciting
                activities and workshops designed to inspire, educate, and
                entertain.
              </p>
              <p className="text-dark">
                This year, we’ve curated a diverse range of events, including
                career counseling sessions, mental health talks, astronomy
                workshops, and self-defense training. Our goal is to provide a
                platform for students to learn, grow, and connect with each
                other.
              </p>
              <p className="text-dark">
                Samarambha 2025 is more than just an event—it’s a celebration of
                knowledge, creativity, and collaboration. We invite you to be a
                part of this unforgettable experience!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
