import React from 'react';

import { HeaderHome, Intro } from '../components';

const links = ['Home', 'About', 'Contact', 'Watch Movies!'];

const Home = () => {
  return (
    <div className="Home">
      <HeaderHome items={links} />
      <Intro />
    </div>
  );
};

export default Home;
