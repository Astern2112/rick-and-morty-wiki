import React, { useState } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
