import React, { useState } from "react";
import Axios from "axios";
import SelectOffPokemon from "./components/InputOffPokemon";
import SelectDefPokemon from "./components/InputDefPokemon";
import InputMove from "./components/InputMove";
import OffenseInputs from "./components/OffenseInputs";
import DefenseInputs from "./components/DefenseInputs";
import "./index.css";
import Professor from '../src/assets/images/Spr_RG_Oak.png';

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
      const response = await Axios.post("https://gen1-poke-damage-calc-api.vercel.app/calculate-damage", {
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
    <main className="bg-gameboyWhite min-h-screen flex flex-col items-center justify-start pt-40">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-80 h-80 rounded-lg bg-gameboyGray"></div>
      
      {/* Result display and Professor image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-12 w-64 h-64 bg-gameboyGreen drop-shadow-lg z-10 flex flex-col items-center justify-start">
        {result && (
          <div className="text-center p-2 mt-2">
            <h3 className="font-mono text-gameboyWhite">Damage Calculation Result:</h3>
            <p className="font-mono text-gameboyWhite">{result}</p>
          </div>
        )}
        <img 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 w-32 h-auto" 
          src={Professor} 
          alt="Professor" 
        />
      </div>
      
      <div className="flex justify-between w-full px-20">
        {/* Attacking Pokemon section */}
        <div className="flex flex-col items-start w-auto px-6 py-4 pb-2 border-2 border-gameboyBlue">
          <h3 className="font-mono text-gameboyBlue mb-1">Attacking Pokemon</h3>
          <div className="w-64 mb-2">
            <SelectOffPokemon onOffPokeChange={handleOffPokeChange} />
          </div>
          <h3 className="font-mono text-gameboyBlue mb-1">Attacker Stats</h3>
          <div className="mb-2">
            <OffenseInputs handleOffInputChange={handleOffInputChange} />
          </div>
          <h3 className="font-mono text-gameboyBlue mb-1">Move Selection</h3>
          <div className="w-64">
            <InputMove onMoveChange={handleMoveChange} />
          </div>
        </div>
        
        {/* Defending Pokemon section */}
        <div className="flex flex-col items-end w-auto px-6 py-4 pb-2 border-2 border-gameboyBlue">
          <h3 className="font-mono text-gameboyBlue mb-1">Defending Pokemon</h3>
          <div className="w-64 mb-2">
            <SelectDefPokemon onDefPokeChange={handleDefPokeChange} />
          </div>
          <h3 className="font-mono text-gameboyBlue mb-1">Defender Stats</h3>
          <div>
            <DefenseInputs handleDefInputChange={handleDefInputChange} />
          </div>
        </div>
      </div>
      
      {/* Calculate button */}
      <div className="mt-8">
        <button 
          className="font-mono border-double border-4 border-gameboyRed rounded-full drop-shadow-xl" 
          onClick={handleCalcDam}
        >
          Calculate Damage!
        </button>
      </div>
      
      {/* Footer */}
      <footer className="mt-auto py-4">
        <a
          href="https://github.com/nabrego/Gen1PokeDamageCalc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gameboyBlue font-mono"
        >
          GitHub Repository
        </a>
      </footer>
    </main>
  );
}

export default App;
