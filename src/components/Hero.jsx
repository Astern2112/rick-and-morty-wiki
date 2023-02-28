import React from 'react';
import { images } from '../constants';

const Hero = () => {
  return (
    <section className="h-screen bg-purple-900 text-white">
      <div className="mx-3 flex flex-col items-center md:mx-auto">
        <img
          src={images.RickAndMorty}
          alt="Rick and Morty banner image"
          className="h-128"
        />
        <h1 className="mb-4 text-5xl font-bold">
          Welcome to the Rick and Morty Wiki
        </h1>
        <p className="text-center text-xl">
          Get ready to go on an interdimensional adventure with Rick and Morty!
        </p>
      </div>
    </section>
  );
};

export default Hero;
