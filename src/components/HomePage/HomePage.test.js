import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Hello Deepak👋</h1>
      <div>
        <img src="/path/to/discount-image.png" alt="Discount" />
        <h2>Get Discount up to 25% On this months!</h2>
      </div>
      <div>
        <h3>Services</h3>
        <div>
          <Link to="/service/cleaning">
            <img src="/path/to/cleaning-icon.png" alt="Cleaning" />
            <p>Cleaning</p>
          </Link>
          <Link to="/service/plumbing">
            <img src="/path/to/plumbing-icon.png" alt="Plumbing" />
            <p>Plumbing</p>
          </Link>
          <Link to="/service/repairing">
            <img src="/path/to/repairing-icon.png" alt="Repairing" />
            <p>Repairing</p>
          </Link>
        </div>
      </div>
      <div>
        <h3>Specialist</h3>
        <div>
          <div>
            <img src="/path/to/john.jpg" alt="John P. Boisvert" />
            <p>John P. Boisvert - Verified</p>
          </div>
          <div>
            <img src="/path/to/sylvia.jpg" alt="Sylvia V. Bagley" />
            <p>Sylvia V. Bagley - Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
