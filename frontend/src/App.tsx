import React, { useState } from "react";
import Axios from "axios";
import SelectOffPokemon from "./components/InputOffPokemon";
import SelectDefPokemon from "./components/InputDefPokemon";
import InputMove from "./components/InputMove";
import OffenseInputs from "./components/OffenseInputs";
import DefenseInputs from "./components/DefenseInputs";
import "./index.css";

interface OptionType {
  value: string;
  label: string;
}

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
        spd: 0,
        spe: 0,
      },
      boosts: {
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
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
        spd: 0,
        spe: 0,
      },
      boosts: {
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0,
      },
      level: 0,
    },
  });

  const [result, setResult] = useState<string | null>(null);

  const handleCalcDam = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/calculate-damage", {
        move: calcData.move,
        offensePoke: calcData.offensePoke,
        defensePoke: calcData.defensePoke,
      });

      setResult(response.data);
    } catch (error) {
      console.error("Error calculatin damage: ", error);
    }
  };

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

      // Check for IVS or Stat Boosts
      if (name.startsWith("ivs")) {
        updatedOffensePoke.ivs = {
          ...prev.offensePoke.ivs,
          [name]: numericValue,
          ...(name === "ivsspc" ? { spa: numericValue, spd: numericValue } : {}), // Spa and Spd are the same in gen 1
        };
      }

      if (name.startsWith("boosts")) {
        updatedOffensePoke.boosts = {
          ...prev.offensePoke.boosts,
          [name]: numericValue,
          ...(name === "boostsspc" ? { spa: numericValue, spd: numericValue } : {}), // Spa and Spd are the same in gen 1
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

      // Check for IVS or Stat Boosts
      if (name.startsWith("ivs")) {
        updatedDefensePoke.ivs = {
          ...prev.defensePoke.ivs,
          [name]: numericValue,
          ...(name === "ivsspc" ? { spa: numericValue, spd: numericValue } : {}), // Spa and Spd are the same in gen 1
        };
      }

      if (name.startsWith("boosts")) {
        updatedDefensePoke.boosts = {
          ...prev.defensePoke.boosts,
          [name]: numericValue,
          ...(name === "boostsspc" ? { spa: numericValue, spd: numericValue } : {}), // Spa and Spd are the same in gen 1
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
    <main className="bg-gameboyWhite min-h-screen">
      <div>
        <h3 className="font-mono text-gameboyBlue">Attacking Pokemon</h3>
        <div className="w-1/5">
          <SelectOffPokemon onOffPokeChange={handleOffPokeChange} />
        </div>
        <h3 className="font-mono">Attacker Stats</h3>
        <OffenseInputs handleOffInputChange={handleOffInputChange}/>
        <h3 className="font-mono">Move Selection</h3>
        <div className="w-1/5">
          <InputMove onMoveChange={handleMoveChange} />
        </div>
        <h3 className="font-mono">Defender Stats</h3>
        <DefenseInputs handleDefInputChange={handleDefInputChange}/>
        <h3 className="font-mono">Defending Pokemon</h3>
        <div className="w-1/5">
          <SelectDefPokemon onDefPokeChange={handleDefPokeChange} />
        </div>
        <button className="font-mono bg-gameboyRed rounded-full" onClick={handleCalcDam}>Calculate Damage!</button>
        {result && (
          <div>
            <h3 className="font-mono">Damage Calculation Result:</h3>
            <p className="font-mono">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
