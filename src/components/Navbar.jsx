import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mx-9">
      <ul className="hidden flex-wrap justify-center gap-12 text-lg md:flex md:justify-start md:gap-6">
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/trivia">Trivia</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
