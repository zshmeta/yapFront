import React from 'react';
import './Snowflakes.scss';

const Snowflakes = () => {
  const numberOfParticles = 200;
  const particles = [];

  for (let i = 0; i < numberOfParticles; i++) {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 33}s`,
      animationDuration: `${Math.random() * 43 + 5}s`,
      backgroundColor: `hsl(${Math.random() * 360}, ${80 + Math.random() * 20}%, ${60 + Math.random() * 30}%)`,
    };
    particles.push(<div key={i} className="particle" style={style}></div>);
  }

    return <>{particles}</>;
};

export default Snowflakes;