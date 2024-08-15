import React, { useState, useEffect } from 'react';
import './Home.css';
import TypingAnimation from './TypingAnimation';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate('/'+path);
  };
  return (
    <div>
      <div className="header">
        <div className="rishi-container">
          <div className="rishi"> rishi. </div>
        </div>
          <div className="route-container">
          <div className="route-item">
            <span className="route-text" onClick={() => handleClick('')}> Home </span>
          </div>
          <div className="route-item">
            <span className="route-text" onClick={() => handleClick('Timeline')}> Timeline </span>
          </div>
          <div className="route-item">
            <span className="route-text" onClick={() => handleClick('Projects')}> Projects </span>
          </div>
          <div className="route-item">
            <span className="route-text" onClick={() => handleClick('Blogs')}> Blogs </span>
          </div>
        </div>
      </div>
      <div className="name-item">
        Korpala Hrushikesh
      </div>
      <TypingAnimation text="Software Developer" delay={100} />
    </div>
  );
}

export default Home;
