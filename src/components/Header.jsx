import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className=" sticky top-0 z-10 bg-gray-900 py-4 text-white">
      <div className="ml-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Rick and Morty Wiki
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
