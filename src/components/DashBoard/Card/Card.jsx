import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, content, path},props) {
  return (

    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <Link to={path}><button className="styled-button" onClick={props.function}>Click Here</button></Link>
    </div>
  );
}

export default Card;
