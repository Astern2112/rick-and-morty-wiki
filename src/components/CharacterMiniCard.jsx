import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CharacterMiniCard = ({ id }) => {
  const naviate = useNavigate();

  const { isLoading, error, data } = useQuery(['character', id], () =>
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      (res) => res.data
    )
  );

  const handleCharacterNavigate = (id) => {
    naviate(`/characters/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { name, image } = data;

  return (
    <div
      className="flex h-32 cursor-pointer items-center justify-start gap-4 rounded-lg bg-gray-800 p-4 hover:bg-gray-700"
      onClick={() => handleCharacterNavigate(id)}
    >
      <div>
        <img src={image} alt={name} className="h-24 w-24 rounded-full" />
      </div>
      <div className="text-xl font-bold text-white">{name}</div>
    </div>
  );
};

export default CharacterMiniCard;
