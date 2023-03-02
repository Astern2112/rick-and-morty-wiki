import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="mx-9">
        <FaBars
          onClick={() => toggleOpen()}
          className="scale-150 hover:cursor-pointer md:hidden"
        />
        <ul className="hidden flex-wrap justify-center gap-12 text-lg md:flex md:justify-start md:gap-6">
          <li className="hover:text-orange-500">
            <Link to="/characters">Characters</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/episodes">Episodes</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <nav className="absolute right-0 top-0 min-h-max w-2/5 rounded-xl bg-gray-900 shadow-lg md:hidden ">
          <IoIosClose
            className="absolute right-6 top-3 scale-150 hover:cursor-pointer"
            size={40}
            onClick={() => toggleOpen()}
          />
          <ul className="flex flex-col justify-start gap-4 py-28 pl-5 text-left text-xl">
            <li className="max-w-max hover:text-orange-500">
              <Link to="/characters" onClick={() => toggleOpen()}>
                Characters
              </Link>
            </li>
            <li className="max-w-max hover:text-orange-500">
              <Link to="/episodes" onClick={() => toggleOpen()}>
                Episodes
              </Link>
            </li>
            <li className="max-w-max hover:text-orange-500">
              <Link to="/locations" onClick={() => toggleOpen()}>
                Locations
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
