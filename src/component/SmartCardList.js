import React, { useState, useEffect } from 'react';
import { API } from '../api/API';
import { CardList } from './CardList';

export const SmartCardList = () => {
  const [pokemons, setPokemons] = useState([]);
  const f = async () => {
    const json = await API.getPokemons();
    setPokemons(json.results);
  };

  useEffect(() => {
    f();
  }, []);
  return (
    <div>
      {pokemons &&
        pokemons.length &&
        pokemons.map(pokemon => <CardList {...pokemon} />)}{' '}
    </div>
  );
};
