import React from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

// Import images
import healthImage from "../assets/images/health.png";
import carCImage from "../assets/images/carc.jpg";
import mentalHImage from "../assets/images/mentalH.jpg";
import emerImage from "../assets/images/emer.jpg";
import lawImage from "../assets/images/law.jpg";
import selfDefenseImage from "../assets/images/self-defense.jpg";

const events = [
  {
    title: "Multi Speciality Health Checkup Camp",
    time: "11:00 AM – 3:00 PM",
    location: "Pushkar 4th Floor",
    description:
      "Your health matters! Get free checkups from expert doctors in various fields, including cardiology, dermatology, and general medicine. Free consultations and health tips will be provided.",
    image: healthImage, // Use the imported image
  },
  {
    title: "Career Counselling Session",
    time: "10:00 AM – 11:00 AM",
    location: "LH3004",
    description:
      "Confused about your career path? Get expert advice from industry professionals and career counselors. Learn about emerging career opportunities and how to achieve your goals.",
    image: carCImage, // Use the imported image
  },
  {
    title: "Talk on Mental Health",
    time: "11:00 AM – 12:00 PM",
    location: "LH3004",
    description:
      "Mental health is as important as physical health. Join us for an insightful talk by renowned psychologists on managing stress, anxiety, and maintaining a healthy work-life balance.",
    image: mentalHImage, // Use the imported image
  },
  {
    title: "Astronomy Workshop",
    time: "12:00 PM – 12:30 PM",
    location: "LH3004",
    description:
      "Explore the wonders of the universe! This workshop will take you on a journey through the stars, planets, and galaxies. Perfect for space enthusiasts!",
    image:
      "https://drive.google.com/file/d/1ADHqp6shK33a9odIe2_Vxp8dIDHmOmOK/view?usp=drive_link",
  },
  {
    title: "Emergency Protocol Demonstration",
    time: "12:30 PM – 1:00 PM",
    location: "LH3004",
    description:
      "Learn essential emergency protocols, including first aid, fire safety, and disaster management. Be prepared to handle emergencies confidently.",
    image: emerImage, // Use the imported image
  },
  {
    title: "Constitutional Awareness Session",
    time: "01:00 PM – 2:00 PM",
    location: "LH3004",
    description:
      "Understand your rights and responsibilities as a citizen. This session will cover the basics of the constitution and its importance in our daily lives.",
    image: lawImage, // Use the imported image
  },
  {
    title: "Self Defence Workshop",
    time: "02:00 PM – 04:00 PM",
    location: "OAT",
    description:
      "Empower yourself with self-defense techniques! This workshop will teach you practical skills to protect yourself in challenging situations.",
    image: selfDefenseImage, // Use the imported image
  },
];

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5 mt-5">
        <h1 className="text-center mb-5">Event Schedule</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {events.map((event, index) => (
            <div className="col" key={index}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
