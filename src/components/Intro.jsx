import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__main">
          <div className="intro__block">
            <h1 className="intro__title">Popcorn, please!</h1>
            <Link to={'/movies'}>Start Watching</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
