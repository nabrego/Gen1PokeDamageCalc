import React from 'react';

const calcDamButton: React.FC = () => {
  return (
    <button className = "bg-white border border-black text-black font-bold py-2 px-4 rounded hover:bg-gray-100">
      Calculate Damage!
    </button>
  );
};

export default calcDamButton;