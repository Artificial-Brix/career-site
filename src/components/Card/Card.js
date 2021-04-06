import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card_item">
        <h3>(Position Name jSON)</h3>
        <h5>(Position Type jSON)</h5>
        <div className="card_item_content">
          <p>Responsibility (fixed ): (json)</p>
          <p>Responsibility (fixed ): (json)</p>
          <p>Responsibility (fixed ): (json)</p>
          <p>Responsibility (fixed ): (json)</p>
          <p>Responsibility (fixed ): (json)</p>
        </div>
        <button className="btn card_btn">Contact form</button>
      </div>
    </div>
  );
};

export default Card;