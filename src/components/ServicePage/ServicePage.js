import React from 'react';
import { useParams, Link } from 'react-router-dom';

const services = {
  cleaning: {
    name: 'Cleaning',
    specialists: [
      { name: 'Jase P. Boisvert', rating: 4.5, price: 260, image: '/path/to/jase.jpg' },
    ],
  },
  plumbing: {
    name: 'Plumbing',
    specialists: [
      { name: 'Jase P. Boisvert', rating: 4.5, price: 260, image: '/path/to/jase.jpg' },
    ],
  },
  repairing: {
    name: 'Repairing',
    specialists: [],
  },
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const service = services[serviceName];

  return (
    <div>
      <h1>{service.name}</h1>
      {service.specialists.length > 0 ? (
        service.specialists.map((specialist, index) => (
          <div key={index}>
            <img src={specialist.image} alt={specialist.name} />
            <p>{specialist.name}</p>
            <p>Rating: {specialist.rating}</p>
            <p>Price: ₹{specialist.price} / day</p>
            <button>Book Now</button>
          </div>
        ))
      ) : (
        <p>No specialists available</p>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ServicePage;
