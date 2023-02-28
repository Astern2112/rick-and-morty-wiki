import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
function CharacterPage() {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery(['characters', page], () =>
    axios(`https://rickandmortyapi.com/api/character?page=${page}`).then(
      (res) => res.data
    )
  );

  const handlePrevPage = () => {
    if (data.info.prev) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (data.info.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePageChange = (event) => {
    event.preventDefault();
    const newPage = parseInt(event.target.elements.page.value);
    setPage(newPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching characters: {error.message}</div>;
  }

  return (
    <div className=" bg-gray-800 py-8 px-20">
      <h1 className="pb-3 text-3xl font-bold text-white">Characters</h1>
      <form onSubmit={handlePageChange} className="mb-4">
        <label htmlFor="page" className="mr-2 text-white">
          Go to page:
        </label>
        <input
          type="number"
          id="page"
          name="page"
          min="1"
          max={data.info.pages}
          defaultValue={page}
          className="rounded-md bg-gray-700 py-2 px-3 text-white"
        />
        <button
          type="submit"
          className="ml-2 rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Go
        </button>
      </form>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        {data.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={handlePrevPage}
          disabled={!data.info.prev}
        >
          Prev
        </button>
        <div className="text-xl font-bold text-white">{page}</div>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={handleNextPage}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CharacterPage;
