import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleCharacterNaviage = (id) => {
    navigate(`/characters/${id}`);
  };
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
        <ul className="mb-6 max-w-fit list-disc pl-6">
          <li
            onClick={() => handleCharacterNaviage(1)}
            className="hover:cursor-pointer hover:text-orange-500"
          >
            Rick Sanchez
          </li>
          <li
            onClick={() => handleCharacterNaviage(2)}
            className="hover:cursor-pointer hover:text-orange-500"
          >
            Morty Smith
          </li>
          <li
            onClick={() => handleCharacterNaviage(3)}
            className="hover:cursor-pointer hover:text-orange-500"
          >
            Summer Smith
          </li>
          <li
            onClick={() => handleCharacterNaviage(4)}
            className="hover:cursor-pointer hover:text-orange-500"
          >
            Beth Smith
          </li>
          <li
            onClick={() => handleCharacterNaviage(5)}
            className="hover:cursor-pointer hover:text-orange-500"
          >
            Jerry Smith
          </li>
        </ul>
        <button className="rounded bg-purple-900 py-2 px-4 text-white hover:bg-purple-700">
          <Link to="/characters">Learn More about the Characters</Link>
        </button>
      </div>
    </section>
  );
};

export default About;
