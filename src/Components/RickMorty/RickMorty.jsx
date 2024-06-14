import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RickMortyGrid = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold text-center my-4'>Rick & Morty API Example</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {characters.map(character => (
          <div key={character.id} className='bg-white p-4 rounded shadow'>
            <img src={character.image} alt={character.name} className='w-full h-auto' />
            <p className='text-center mt-2'>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickMortyGrid;
