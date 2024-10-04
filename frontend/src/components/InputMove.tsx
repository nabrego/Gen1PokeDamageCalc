import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';

interface OptionType {
    value: string;
    label: string;
}

interface InputMoveData {
    onMoveChange: (selectedMove: OptionType | null) => void;
}

const InputMove: React.FC<InputMoveData> = ({ onMoveChange }) => {
  const [moveOptions, setMoveOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchMove = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/move?limit=165');
        const fetchedMove = response.data.results.map((move: { name: string, url: string}) => ({
          value: move.name,
          label: move.name.charAt(0).toUpperCase() + move.name.slice(1)
        }));
        setMoveOptions(fetchedMove);
      } catch (error) {
        console.error("Error fetching move titles: ", error);
      }
    };
    fetchMove();
  }, []);

  const handleMoveChange = (selectedOption: OptionType | null) => {
    onMoveChange(selectedOption);
  }

  return (
    <Select
      options = {moveOptions} 
      placeholder = "Select Move..."
      isSearchable = {true}
      isClearable = {true}
      onChange = {handleMoveChange}
    />
  );
};

export default InputMove;