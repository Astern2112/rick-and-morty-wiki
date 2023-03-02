import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../components/Loading';

const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEpisodeNavigate = (episodeNo) => {
    navigate(`/episodes/${episodeNo}`);
  };

  const { isLoading, error, data } = useQuery(['character', id], () =>
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      (res) => res.data
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = data;

  return (
    <div className="min-h-screen bg-gray-900 px-8 py-10 text-white ">
      <h2 className="mb-10 block text-center text-5xl font-bold ">{name}</h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-20">
        <img src={image} alt={name} className="scale-130 rounded-lg" />

        <div className="flex flex-col">
          <p className="mb-4 text-xl text-gray-300">
            <span className="font-bold text-gray-100">Status:</span> {status}
          </p>
          <p className="mb-4 text-xl text-gray-300">
            <span className="font-bold text-gray-100">Species:</span> {species}
          </p>
          {type && (
            <p className="mb-4 text-xl text-gray-300">
              <span className="font-bold text-gray-100">Type:</span> {type}
            </p>
          )}
          <p className="mb-4 text-xl text-gray-300">
            <span className="font-bold text-gray-100">Gender:</span> {gender}
          </p>
          <p className="mb-4 text-xl text-gray-300">
            <span className="font-bold text-gray-100">Origin:</span>{' '}
            {origin.name}
          </p>
          <p className="mb-4 text-xl text-gray-300">
            <span className="font-bold text-gray-100">Location:</span>{' '}
            {location.name}
          </p>
        </div>
      </div>
      <div>
        <p className="mb-4 text-xl text-gray-300">
          <span className="font-bold text-gray-100">Episodes:</span>{' '}
          {episode.length}
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {episode.map((ep) => (
            <div
              key={ep}
              className="rounded-lg bg-gray-700 p-2 pl-3 text-left shadow-md hover:cursor-pointer hover:bg-gray-500"
              onClick={() => handleEpisodeNavigate(ep.split('/').pop())}
            >
              <p className="text-lg font-bold text-gray-100">
                Episode {ep.split('/').pop()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
