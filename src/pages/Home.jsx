import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const heroTextRef = useRef(null);
  const ctaButtonRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    // Hero section animation
    gsap.from(heroTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // CTA button animation
    gsap.from(ctaButtonRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      delay: 1,
    });

    // Background animation
    gsap.to(".hero-section", {
      backgroundPosition: "50% 30%",
      duration: 10,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section bg-dark text-white text-center py-5">
        <div className="container" ref={heroTextRef}>
          <h1 className="display-4">Samarambha 2025</h1>
          <p className="lead mt-3">Together for a better tomorrow!</p>
          <button
            ref={ctaButtonRef}
            className="btn btn-primary btn-lg mt-4"
            onClick={() => alert("Welcome to Samarambha 2025!")}
          >
            Join the Event
          </button>
        </div>
      </div>

      {/* Event Highlights Section */}
      <div className="event-highlights py-5">
        <div className="container">
          <h2 className="text-center mb-5">Event Highlights</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Inauguration</h5>
                  <p className="card-text">
                    Join us for the grand opening of Samarambha 2025!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Health Checkup Camp</h5>
                  <p className="card-text">
                    Free health checkups for all students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Career Counselling</h5>
                  <p className="card-text">
                    Get expert advice on your career path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
