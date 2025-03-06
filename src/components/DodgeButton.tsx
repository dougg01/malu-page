import React, { useState } from 'react';

export const DodgeButton: React.FC<{ text: string }> = ({ text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-12 rounded-full text-xl shadow-lg absolute transition-all duration-200"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </button>
  );
};