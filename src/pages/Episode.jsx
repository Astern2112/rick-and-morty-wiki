import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import CharacterMiniCard from '../components/CharacterMiniCard';

const Episode = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['episode', id], () =>
    axios(`https://rickandmortyapi.com/api/episode/${id}`).then(
      (res) => res.data
    )
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { name, air_date, episode, characters, created } = data;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-8 py-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">{name}</h1>
      <div className="flex flex-col sm:flex-row sm:gap-10">
        <p className="mb-4 text-xl text-gray-300">
          <span className="font-bolder text-gray-100">Episode:</span> {episode}
        </p>
        <p className="mb-4 text-xl text-gray-300">
          <span className="font-bolder text-gray-100">Air Date:</span>{' '}
          {air_date}
        </p>
      </div>

      <p className="mb-12 text-xl text-gray-300">
        <span className="font-bolder text-gray-100">Characters:</span>{' '}
        {characters.length}
      </p>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character) => (
          <CharacterMiniCard key={character} id={character.split('/').pop()} />
        ))}
      </div>
    </div>
  );
};

export default Episode;
