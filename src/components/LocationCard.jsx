import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocationCard = ({ location }) => {
  const navigate = useNavigate();

  const handleLocationNavigate = (id) => {
    navigate(`./${id}`);
  };

  return (
    <div>
      <div
        className="flex aspect-square flex-col items-center justify-center rounded-full bg-gray-800 p-10 font-bold text-white duration-150 hover:scale-105 hover:cursor-pointer hover:ease-in-out"
        onClick={() => handleLocationNavigate(location.id)}
      >
        <h3 className="text-2xl font-bold">{location.name}</h3>
        <p className="text-base font-medium text-gray-300">
          <span className="font-bold text-gray-100">Type: </span>
          {location.type}
        </p>
        <p className="text-base font-medium text-gray-400">
          {' '}
          <span className="font-bold text-gray-100">Dimension:</span>{' '}
          {location.dimension}
        </p>
        <p className="text-base font-medium text-gray-400">
          <span className="font-bold text-gray-100">Residents:</span>{' '}
          {location.residents.length}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
