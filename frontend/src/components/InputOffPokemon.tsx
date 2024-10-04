import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';

interface OptionType {
    value: string;
    label: string;
}

interface InputPokeData {
  onOffPokeChange: (selectPoke: OptionType | null) => void;
}

const SelectOffPokemon: React.FC<InputPokeData> = ({ onOffPokeChange }) => {
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

  const handleOffPokeChange = (selectedOption: OptionType | null) => {
    onOffPokeChange(selectedOption);
  }

  return (
    <Select
      options = {pokemonOptions} 
      placeholder = "Select Pokemon..."
      isSearchable = {true}
      isClearable = {true}
      onChange = {handleOffPokeChange}
    />
  );
};

export default SelectOffPokemon;