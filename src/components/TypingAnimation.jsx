// src/components/TypingAnimation.js
import React, { useState, useEffect } from 'react';
import '../styles/TypingAnimation.css';

const TypingAnimation = ({ textArray, delay }) => {
  const [text, setText] = useState(textArray[0]);
  const [arrayIndex,setArrayIndex] = useState(1);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [val,setVal] = useState(-1);
  

  useEffect(() => {
    if (val === -1) {
      if(currentIndex<text.length) {
        const timeout = setTimeout(() => {
          setCurrentIndex(currentIndex+1);
          setCurrentText(currentText.slice(0,-1)+text[currentIndex]+'|');
        }, delay);
        return () => clearTimeout(timeout);
      }
      else {
        const timeout = setTimeout(() => {
          setVal(0);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }
    else if (val === -2) {
      if(currentIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentIndex(currentIndex-1);
          setCurrentText(currentText.slice(0,-2)+'|');
        }, delay);
        return () => clearTimeout(timeout);
      }
      else {
        const timeout = setTimeout(() => {
          setVal(-1);
          setArrayIndex((arrayIndex+1)%textArray.length); 
          setText(textArray[arrayIndex]);
        }, delay);
        return () => clearTimeout(timeout);
      }

    }
    else if (val === 2) {
      const timeout = setTimeout(() => {
        setVal(-2);
      },delay);
      return () => clearTimeout(timeout);
    }
    else if (val%2 === 0) {
      const timeout = setTimeout(() => {
        setVal(val+1);
        setCurrentText(currentText.slice(0,-1));
      }, 3*delay);
      return () => clearTimeout(timeout);
    }
    else if (val%2 === 1) {
      const timeout = setTimeout(() => {
        setVal(val+1);
        setCurrentText(currentText+'|');
      }, 3*delay);
      return () => clearTimeout(timeout);
    }
  }, [textArray,currentIndex,val,text,currentText,arrayIndex,delay]);

  return <div className='type-container'>
    <span className='type-constant'> I am </span>
    <span className='type-animation'> {currentText} </span>
  </div>
};


export default TypingAnimation;

