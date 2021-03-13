import React from 'react';

import loaderSvg from '../assets/images/loader.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loaderSvg} alt="loader svg" />
    </div>
  );
};

export default Preloader;
