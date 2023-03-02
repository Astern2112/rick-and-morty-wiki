import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import CharacterMiniCard from '../components/CharacterMiniCard';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Episode = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['episode', id], () =>
    axios(`https://rickandmortyapi.com/api/episode/${id}`).then(
      (res) => res.data
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {characters.map((character) => (
          <CharacterMiniCard key={character} id={character.split('/').pop()} />
        ))}
      </div>
    </div>
  );
};

export default Episode;
