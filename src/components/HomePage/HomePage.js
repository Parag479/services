import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Hello Deepak<span role="img" aria-label="wave">👋</span></h1>
      </header>
      
      <div className="banner">
        <img src="/path/to/discount-image.png" alt="Discount" className="banner-image" />
        <div className="banner-text">
          <h2>Get Discount up to <span className="discount">25%</span></h2>
          <p>On this month</p>
        </div>
      </div>

      <section className="services">
        <h3>Services</h3>
        <div className="service-list">
          <Link to="/service/cleaning" className="service-item">
            <img src="/path/to/cleaning-icon.png" alt="Cleaning" className="service-icon" />
            <p>Cleaning</p>
          </Link>
          <Link to="/service/plumbing" className="service-item">
            <img src="/path/to/plumbing-icon.png" alt="Plumbing" className="service-icon" />
            <p>Plumbing</p>
          </Link>
          <Link to="/service/repairing" className="service-item">
            <img src="/path/to/repairing-icon.png" alt="Repairing" className="service-icon" />
            <p>Repairing</p>
          </Link>
        </div>
      </section>

      <section className="specialists">
        <h3>Specialist</h3>
        <div className="specialist-list">
          <div className="specialist-item">
            <img src="/path/to/john.jpg" alt="John P. Boisvert" className="specialist-image" />
            <p>John P. Boisvert - <span className="verified">Verified</span></p>
          </div>
          <div className="specialist-item">
            <img src="/path/to/sylvia.jpg" alt="Sylvia V. Bagley" className="specialist-image" />
            <p>Sylvia V. Bagley - <span className="verified">Verified</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
