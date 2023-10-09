import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Card.css';

function Card({ title, content},props) {
  return (

    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="styled-button" onClick={props.function}>Click Here</button>
    </div>
  );
}

export default Card;
