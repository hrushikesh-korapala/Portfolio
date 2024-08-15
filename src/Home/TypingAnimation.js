// src/components/TypingAnimation.js
import React, { useState, useEffect } from 'react';
import './Home.css';

const TypingAnimation = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevText, setPrevText] = useState('');

  useEffect(() => {
    if (currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setPrevText(prevText => prevText + text[currentIndex]);
        setCurrentText(currText => prevText + '|');
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <div className='type-container'>
    <span className='type-constant'> I am </span>
    <span className='type-animation'> {currentText} </span>
  </div>
};


export default TypingAnimation;

