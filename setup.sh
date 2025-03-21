#!/bin/bash

# Create directories
mkdir -p src/assets/images src/components src/pages src/styles

# Create files
touch src/main.jsx src/App.jsx src/index.html
touch src/components/Navbar.jsx src/components/EventCard.jsx src/components/Footer.jsx
touch src/pages/Home.jsx src/pages/Events.jsx src/pages/About.jsx
touch src/styles/global.css

# Add basic content to files
cat <<EOL > src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOL

cat <<EOL > src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
EOL

cat <<EOL > src/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Samarambha 2025</title>
    <!-- Bootstrap CSS CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <div id="root"></div>
    <!-- Bootstrap JS CDN -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossorigin="anonymous"
    ></script>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOL

cat <<EOL > src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Samarambha 2025</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
EOL

cat <<EOL > src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ title, time, location, description, image }) => {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>Time:</strong> {time}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
EOL

cat <<EOL > src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; 2025 Samarambha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
EOL

cat <<EOL > src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Samarambha 2025</h1>
          <p className="lead">Together for a better tomorrow!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
EOL

cat <<EOL > src/pages/Events.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';

const events = [
  {
    title: "Inauguration",
    time: "5:00 PM onwards",
    location: "Auditorium",
    description: "Join us for the grand opening of Samarambha 2025!",
    image: "/src/assets/images/inauguration.jpg",
  },
  {
    title: "Multi Speciality Health Checkup Camp",
    time: "11:00 AM – 3:00 PM",
    location: "Pushkar 4th Floor",
    description: "Free health checkups for all students.",
    image: "/src/assets/images/health-checkup.jpg",
  },
];

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
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
EOL

cat <<EOL > src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-5">About Samarambha 2025</h1>
        <p className="lead text-center">
          Samarambha is a college event aimed at fostering community spirit and personal growth. Join us for a series of exciting activities and workshops!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
EOL

cat <<EOL > src/styles/global.css
/* Custom CSS */
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}
EOL

echo "Project setup complete!"