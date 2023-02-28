import React from 'react';

const EpisodeCard = ({ episode }) => {
  return (
    <div className="rounded-md bg-gray-900 p-5 shadow-md">
      <h2 className="mb-2 max-w-fit text-2xl font-bold text-white hover:cursor-pointer hover:text-orange-500">
        {episode.name}
      </h2>

      <p className="mb-2 text-gray-400">
        Season: {episode.episode.substring(1, 3)}, Episode:{' '}
        {episode.episode.substring(4)}
      </p>
      <p className="mb-2 text-gray-400">Air date: {episode.air_date}</p>
      <p className="mb-2 text-gray-400">
        Characters: {episode.characters.length}
      </p>
    </div>
  );
};

export default EpisodeCard;
