// src/components/RickAndMortyExample.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RickMorty = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick & Morty API Example</h1>
      <div>
        {characters.map(character => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickMorty;
