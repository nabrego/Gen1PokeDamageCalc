import React from 'react';

interface calcButtonInfo {
  onClick: () => void;
}

const calcDamButton: React.FC<calcButtonInfo> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Calculate Damage!</button>
  );
};

export default calcDamButton;