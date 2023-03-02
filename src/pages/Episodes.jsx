import { useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';
import EpisodeCard from '../components/EpisodeCard';

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  const [query1, query2, query3] = useQueries(
    ['1', '2', '3'].map((page) => {
      return {
        queryKey: ['episodes', page],
        queryFn: () =>
          axios(`https://rickandmortyapi.com/api/episode?page=${page}`).then(
            (res) => {
              setEpisodes((prev) => {
                const newEpisodes = res.data.results.filter(
                  (episode) => !prev.some((e) => e.id === episode.id)
                );
                return prev.concat(newEpisodes);
              });
              return res.data;
            }
          ),
      };
    })
  );

  if (query1.isLoading || query2.isLoading || query3.isLoading) {
    return <div>Loading...</div>;
  }

  if (query1.error || query2.error || query3.error) {
    return (
      <div>
        Error fetching episodes:{' '}
        {query1.error?.message ||
          query2.error?.message ||
          query3.error?.message}
      </div>
    );
  }

  function renderEpisodes(arr, season) {
    return (
      <div>
        <h3 className="my-3 text-2xl font-bold text-white">Season {season}</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {arr
            .filter((episode) => {
              return episode.episode.includes(`S0${season}`);
            })
            .map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-10">
      <h1 className="mb-10 text-3xl font-bold text-white">Episodes</h1>

      {renderEpisodes(episodes, 1)}
      {renderEpisodes(episodes, 2)}
      {renderEpisodes(episodes, 3)}
    </div>
  );
}

export default Episodes;
