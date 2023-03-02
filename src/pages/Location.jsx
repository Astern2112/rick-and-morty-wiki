import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../components/Loading';
import CharacterMiniCard from '../components/CharacterMiniCard';

const Location = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['location', id], () =>
    axios(`https://rickandmortyapi.com/api/location/${id}`).then(
      (res) => res.data
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { name, type, dimension, residents } = data;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-8 py-10 text-white">
      <h2 className="mb-10 block text-center text-5xl font-bold ">{name}</h2>
      <div className="flex flex-col sm:flex-row sm:gap-10">
        <p className="mb-4 text-xl text-gray-300">
          <span className="font-bolder text-gray-100">Type:</span> {type}
        </p>
        <p className="mb-4 text-xl text-gray-300">
          <span className="font-bolder text-gray-100">Dimention:</span>{' '}
          {dimension}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {residents.map((character) => (
          <CharacterMiniCard key={character} id={character.split('/').pop()} />
        ))}
      </div>
    </div>
  );
};

export default Location;
