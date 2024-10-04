import React from 'react';

interface OffenseInputInfo {
    handleOffInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OffenseInputs: React.FC<OffenseInputInfo> = ({ handleOffInputChange }) => {
    return (
        <div>
            <input name="level" placeholder="Level" type="number" min="1" max="100" onChange={handleOffInputChange} />
            <h3>DV's</h3>
            <input name="ivshp" placeholder="HP" type="number" min="0" max="15" onChange={handleOffInputChange} />
            <input name="ivsatk" placeholder="Atk" type="number" min="0" max="15" onChange={handleOffInputChange} />
            <input name="ivsdef" placeholder="Def" type="number" min="0" max="15" onChange={handleOffInputChange} />
            <input name="ivsspc" placeholder="Spc" type="number" min="0" max="15" onChange={handleOffInputChange} />
            <input name="ivsspe" placeholder="Spe" type="number" min="0" max="15" onChange={handleOffInputChange} />
            <h3>Stat Boosts</h3>
            <input name="boostsatk" placeholder="Atk" type="number" min="-6" max="6" onChange={handleOffInputChange} />
            <input name="boostsdef" placeholder="Def" type="number" min="-6" max="6" onChange={handleOffInputChange} />
            <input name="boostsspc" placeholder="Spc" type="number" min="-6" max="6" onChange={handleOffInputChange} />
            <input name="boostsspe" placeholder="Spe" type="number" min="-6" max="6" onChange={handleOffInputChange} />
        </div>
    );
};

export default OffenseInputs;