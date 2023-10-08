import React from 'react';
import './Card.css';

function Card({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="styled-button">Click Here</button>
    </div>
  );
}

export default Card;
