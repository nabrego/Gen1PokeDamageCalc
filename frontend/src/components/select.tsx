import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';

interface OptionType {
    value: string;
    label: string;
}

const SelectComponent: React.FC = () => {
  const [pokemonOptions, setPokemonOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const fetchedPokemon = response.data.results.map((pokemon: { name: string, url: string}) => ({
          value: pokemon.name,
          label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }));
        setPokemonOptions(fetchedPokemon);
      } catch (error) {
        console.error("Error fetching Pokemon names: ", error);
      }
    };
    fetchPokemon();
  }, []);
  return (
    <Select
      options = {pokemonOptions} 
      placeholder = "select Pokemon..."
      isSearchable={true}
      isClearable={true}
    />
  );
};

export default SelectComponent;