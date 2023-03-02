import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import LocationCard from '../components/LocationCard';
import Loading from '../components/Loading';

function Locations() {
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery(['locations', page], () =>
    axios(`https://rickandmortyapi.com/api/location?page=${page}`).then(
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
    return <Loading />;
  }

  if (error) {
    return <div>Error fetching characters: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-10">
      <h1 className="pb-3 text-3xl font-bold text-white">Locations</h1>

      <form onSubmit={handlePageChange} className="mb-4 flex items-center">
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
          className="w-16 rounded-md bg-gray-700 py-2 px-3 text-white"
        />
        <button
          type="submit"
          className="ml-2 rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Go
        </button>
      </form>

      <div className="flex flex-wrap justify-around gap-4 ">
        {data.results.map((location, index) => (
          <LocationCard key={location.id} location={location} />
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

export default Locations;
