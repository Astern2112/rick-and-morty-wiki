import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleCharacterNavigate = (id) => {
    navigate(`./${id}`);
  };

  const isAlive = (status) => {
    if (status === 'Alive') {
      return 'text-green-500';
    } else if (status === 'Dead') {
      return 'text-red-500';
    } else {
      return 'text-yellow-500';
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-800  text-white shadow-lg sm:flex-row xl:w-full">
      <div className="sm:mr-3">
        <img
          className=" aspect-square w-full"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="ml-2 flex w-3/4 flex-col justify-between gap-0 py-3">
        <div>
          <h2
            className=" max-w-fit text-2xl font-bold hover:cursor-pointer hover:text-orange-500"
            onClick={() => handleCharacterNavigate(character.id)}
          >
            {character.name}
          </h2>
          <p className="font-medium ">
            <span className={isAlive(character.status)}>
              {character.status}
            </span>{' '}
            - {character.type ? character.type : character.species} -{' '}
            {character.gender}
          </p>
        </div>
        <div>
          <p className="text-md font-medium text-slate-300">
            Last Known Location:{' '}
          </p>
          <p className="max-w-fit text-lg font-medium hover:cursor-pointer hover:text-orange-500">
            {character.location.name}
          </p>
        </div>
        <div>
          <p className="text-md font-medium text-slate-300">Origin: </p>
          <p className="max-w-fit text-lg font-medium hover:cursor-pointer hover:text-orange-500 ">
            {character.origin.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
