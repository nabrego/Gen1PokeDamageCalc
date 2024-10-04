import React, { useState, useEffect } from "react";
import Axios from "axios";
import SelectOffPokemon from "./components/InputOffPokemon";
import SelectDefPokemon from "./components/InputDefPokemon";
import InputMove from "./components/inputMove";
import OffenseInputs from "./components/OffenseInputs";
import DefenseInputs from "./components/defenseInputs";
import "./index.css";

interface User {
  username: string;
}

interface OptionType {
  value: string;
  label: string;
}

interface AppProps {}

const App: React.FC = () => {
  const [calcData, setCalcData] = useState({
    move: '',
    offensePoke: {
      name: '',
      ivs: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spe: 0,
      },
      boosts: {
        atk: 0,
        def: 0,
        spa: 0,
        spe: 0,
      },
      level: 0,
    },
    defensePoke: {
      name: '',
      ivs: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spe: 0,
      },
      boosts: {
        atk: 0,
        def: 0,
        spa: 0,
        spe: 0,
      },
      level: 0,
    },
  });

  const handleMoveChange = (selectedMove: OptionType | null) => {
    setCalcData((prev) => ({
      ...prev,
      move: selectedMove ? selectedMove.value : '',
    }));
  };

  const handleOffPokeChange = (SelectedOffPokemon: OptionType | null) => {
    setCalcData((prev) => ({
      ...prev,
      offensePoke: {
        ...prev.offensePoke,
        name: SelectedOffPokemon ? SelectedOffPokemon.value : '',
      },
    }));
  };

  const handleDefPokeChange = (SelectedDefPokemon: OptionType | null) => {
    setCalcData((prev) => ({
      ...prev,
      defensePoke: {
        ...prev.defensePoke,
        name: SelectedDefPokemon ? SelectedDefPokemon.value : '',
      },
    }));
  };

  const handleOffInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    setCalcData((prev) => {
      const updatedOffensePoke = { ...prev.offensePoke };

      if (name.startsWith("ivs")) {
        updatedOffensePoke.ivs = {
          ...prev.offensePoke.ivs,
          [name]: numericValue,
          ...(name === "ivsspc" ? { spa: numericValue, spe: numericValue } : {}),
        };
      }

      if (name.startsWith("boosts")) {
        updatedOffensePoke.boosts = {
          ...prev.offensePoke.boosts,
          [name]: numericValue,
          ...(name === "boostsspc" ? { spa: numericValue, spe: numericValue } : {}),
        };
      }

      if (name === "level") {
        updatedOffensePoke.level = numericValue;
      }

      return {
        ...prev,
        offensePoke: updatedOffensePoke,
      };
    });
  };

  const handleDefInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    setCalcData((prev) => {
      const updatedDefensePoke = { ...prev.defensePoke };

      if (name.startsWith("ivs")) {
        updatedDefensePoke.ivs = {
          ...prev.defensePoke.ivs,
          [name]: numericValue,
          ...(name === "ivsspc" ? { spa: numericValue, spe: numericValue } : {}),
        };
      }

      if (name.startsWith("boosts")) {
        updatedDefensePoke.boosts = {
          ...prev.defensePoke.boosts,
          [name]: numericValue,
          ...(name === "boostsspc" ? { spa: numericValue, spe: numericValue } : {}),
        };
      }

      if (name === "level") {
        updatedDefensePoke.level = numericValue;
      }

      return {
        ...prev,
        defensePoke: updatedDefensePoke,
      };
    });
  };

  return (
    <main>
      <div>
        <h3>Attacking Pokemon</h3>
        <SelectOffPokemon onOffPokeChange={handleOffPokeChange}/>
        <h5>Move Selection</h5>
        <InputMove onMoveChange={handleMoveChange} />
      </div>
    </main>
  );
}

export default App;
