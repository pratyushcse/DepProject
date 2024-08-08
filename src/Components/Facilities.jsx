import React from 'react';
import './Facilities.css'; // Import CSS for styling

function Facilities() {
  // Example data for facilities
  const facilities = [
    { name: 'Library', image: 'https://via.placeholder.com/700x400' },
    { name: 'Gymnasium', image: 'https://via.placeholder.com/700x400' },
    { name: 'Cafeteria', image: 'https://via.placeholder.com/700x400' },
    { name: 'Computer Lab', image: 'https://via.placeholder.com/700x400' },
    { name: 'Auditorium', image: 'https://via.placeholder.com/700x400' },
  ];

  return (
    <div className="facilities">
      <h1>Facilities</h1>
      <div className="facilities-list">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-item">
            <img src={facility.image} alt={facility.name} />
            <p>{facility.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
