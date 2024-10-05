import React from 'react';

interface DefenseInputInfo {
    handleDefInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefenseInputs: React.FC<DefenseInputInfo> = ({ handleDefInputChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, min: number, max: number) => {
        let value = Number(e.target.value);
        if (value < min) value = min;
        if (value > max) value = max;
        e.target.value = String(value);
        handleDefInputChange(e);
    };
    return (
        <div>
            <h3>Level</h3>
            <input name="level" placeholder="Level" type="number" min="1" max="100" onChange={(e) => handleChange(e, 1, 100)} />
            <h3>DV's</h3>
            <input name="ivshp" placeholder="HP" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} />
            <input name="ivsatk" placeholder="Atk" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} />
            <input name="ivsdef" placeholder="Def" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} />
            <input name="ivsspc" placeholder="Spc" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} />
            <input name="ivsspe" placeholder="Spe" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} />
            <h3>Stat Boosts</h3>
            <input name="boostsatk" placeholder="Atk" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} />
            <input name="boostsdef" placeholder="Def" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} />
            <input name="boostsspc" placeholder="Spc" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} />
            <input name="boostsspe" placeholder="Spe" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} />
        </div>
    );
};

export default DefenseInputs;