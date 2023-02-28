import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="p-3 text-white">
      <div>
        <h2 className="mb-4 text-3xl font-bold">About Rick and Morty</h2>
        <p className="mb-6 text-lg">
          Rick and Morty is an American animated science fiction sitcom created
          by Justin Roiland and Dan Harmon. The show follows the adventures of
          an eccentric and alcoholic scientist named Rick Sanchez and his
          good-hearted but easily influenced grandson Morty Smith, who split
          their time between domestic family life and interdimensional
          adventures.
        </p>
        <p className="mb-6 text-lg">
          The show premiered on Adult Swim in December 2013 and has since become
          a cultural phenomenon, praised for its innovative storytelling,
          complex characters, and hilarious comedy.
        </p>
        <p className="text-lg">Some of the main characters include:</p>
        <ul className="mb-6 list-disc pl-6">
          <li>Rick Sanchez</li>
          <li>Morty Smith</li>
          <li>Summer Smith</li>
          <li>Beth Smith</li>
          <li>Jerry Smith</li>
        </ul>
        <button className="rounded bg-purple-900 py-2 px-4 text-white hover:bg-purple-700">
          <Link to="/characters">Learn More about the Characters</Link>
        </button>
      </div>
    </section>
  );
};

export default About;
