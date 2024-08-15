import React from 'react';
import './Blogs.css';

import { useNavigate } from 'react-router-dom';
function Blogs() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate('/hrushikesh-korapala.github.io/'+path);
  };
  return (
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
  );
}


export default Blogs;
