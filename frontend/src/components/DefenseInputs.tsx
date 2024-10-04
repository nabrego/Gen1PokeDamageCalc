import React from 'react';

interface DefenseInputInfo {
    handleDefInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefenseInputs: React.FC<DefenseInputInfo> = ({ handleDefInputChange }) => {
    return (
        <div>
            <input name="level" placeholder="Level" type="number" min="1" max="100" onChange={handleDefInputChange} />
            <h3>DV's</h3>
            <input name="ivshp" placeholder="HP" type="number" min="0" max="15" onChange={handleDefInputChange} />
            <input name="ivsatk" placeholder="Atk" type="number" min="0" max="15" onChange={handleDefInputChange} />
            <input name="ivsdef" placeholder="Def" type="number" min="0" max="15" onChange={handleDefInputChange} />
            <input name="ivsspc" placeholder="Spc" type="number" min="0" max="15" onChange={handleDefInputChange} />
            <input name="ivsspe" placeholder="Spe" type="number" min="0" max="15" onChange={handleDefInputChange} />
            <h3>Stat Boosts</h3>
            <input name="boostsatk" placeholder="Atk" type="number" min="-6" max="6" onChange={handleDefInputChange} />
            <input name="boostsdef" placeholder="Def" type="number" min="-6" max="6" onChange={handleDefInputChange} />
            <input name="boostsspc" placeholder="Spc" type="number" min="-6" max="6" onChange={handleDefInputChange} />
            <input name="boostsspe" placeholder="Spe" type="number" min="-6" max="6" onChange={handleDefInputChange} />
        </div>
    );
};

export default DefenseInputs;