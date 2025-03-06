import React, { useState, useEffect } from 'react';

interface CountUpAnimationProps {
  end: number;
  duration: number;
}

export const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="text-4xl font-bold text-pink-600">
      {count}
    </div>
  );
};