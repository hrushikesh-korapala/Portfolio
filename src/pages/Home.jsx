import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import TypingAnimation from '../components/TypingAnimation';

function Home() {
  const roles=["Software Developer","ML Engineer"];

  return (
    <div>
      <Header />
      <div className="name-item">
        Korpala Hrushikesh
      </div>
      <TypingAnimation textArray={roles} delay={100} />
    </div>
  );
}

export default Home;
