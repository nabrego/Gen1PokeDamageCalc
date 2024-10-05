import React from 'react';
import "../index.css";

interface OffenseInputInfo {
    handleOffInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OffenseInputs: React.FC<OffenseInputInfo> = ({ handleOffInputChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, min: number, max: number) => {
        let value = Number(e.target.value);
        if (value < min) value = min;
        if (value > max) value = max;
        e.target.value = String(value);
        handleOffInputChange(e);
    };
    return (
        <div>
            <h3>Level (1 - 100)</h3>
            <input className='border border-solid' name="level" placeholder="Level" type="number" min="1" max="100" onChange={(e) => handleChange(e, 1, 100)} />

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div><h3>DV's (0 - 15)</h3></div>
                    <div><input name="ivsatk" placeholder="Atk" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} /></div>
                    <div><input name="ivsdef" placeholder="Def" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} /></div>
                    <div><input name="ivsspc" placeholder="Spc" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} /></div>
                    <div><input name="ivsspe" placeholder="Spe" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} /></div>
                    <div><input name="ivshp" placeholder="HP" type="number" min="0" max="15" onChange={(e) => handleChange(e, 0, 15)} /></div>
                </div>

                <div className="flex flex-col ml-4">
                    <div><h3>Stat Boosts (-6 - +6)</h3></div>
                    <div></div>
                    <div><input name="boostsatk" placeholder="Atk" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} /></div>
                    <div><input name="boostsdef" placeholder="Def" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} /></div>
                    <div><input name="boostsspc" placeholder="Spc" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} /></div>
                    <div><input name="boostsspe" placeholder="Spe" type="number" min="-6" max="6" onChange={(e) => handleChange(e, -6, 6)} /></div>
                </div>
            </div>
        </div>
    );
};

export default OffenseInputs;