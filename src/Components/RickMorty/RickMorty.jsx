import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../queries';

const RickMorty = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [searchName, setSearchName] = useState('');

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page, name: searchName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleShowMore = () => {
    if (data.characters.info.next) {
      fetchMore({
        variables: {
          page: page + 1,
          name: searchName,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.characters.results = [
            ...prevResult.characters.results,
            ...fetchMoreResult.characters.results,
          ];
          return fetchMoreResult;
        },
      });
      setPage(page + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    setSearchName(name); // Update search query
  };

  return (
    <div className='mx-auto md:px-32 px-4'>
      <h1 className='py-4 text-center font-bold text-veryDarkBlue'>Rick & Morty API Example</h1>
      <form onSubmit={handleSubmit} id="search-form" className='my-4 flex justify-center'>
        <input
          type="text"
          id="search-box"
          name="keyword"
          placeholder="Search characters..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='p-2 border border-gray-300 rounded'
        />
        <button type="submit" className='ml-2 px-4 py-2 bg-veryDarkBlue text-white rounded-md cursor-pointer'>
          Search
        </button>
      </form>
      <div className='search-result grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.characters.results.map(character => (
          <div key={character.id} className='bg-white p-4 rounded shadow'>
            <img src={character.image} alt={character.name} className='w-full h-auto' />
            <p className='text-center text-veryDarkBlue'>{character.name}</p>
          </div>
        ))}
      </div>
      {data.characters.info.next && (
        <div className='flex mb-4 justify-center'>
          <button onClick={handleShowMore} className='px-4 py-2 p-3 bg-veryDarkBlue text-white rounded-full'>
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default RickMorty;
