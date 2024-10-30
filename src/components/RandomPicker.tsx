import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';

interface RandomPickerProps {
  names: string[];
}

function RandomPicker({ names }: RandomPickerProps) {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandom = () => {
    if (names.length === 0) return;
    
    setIsAnimating(true);
    
    // Simulate animation through multiple selections
    let count = 0;
    const interval = setInterval(() => {
      setSelectedName(names[Math.floor(Math.random() * names.length)]);
      count++;
      
      if (count > 10) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100);
  };

  return (
    <div className="text-center">
      <div className="mb-6 min-h-[100px] flex items-center justify-center">
        {selectedName ? (
          <div
            className={`text-2xl font-bold text-indigo-600 ${
              isAnimating ? 'animate-pulse' : ''
            }`}
          >
            {selectedName}
          </div>
        ) : (
          <div className="text-gray-500">Click the button to pick a random name</div>
        )}
      </div>
      
      <button
        onClick={pickRandom}
        disabled={names.length === 0 || isAnimating}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
      >
        <Shuffle className="w-5 h-5" />
        Pick Random Name
      </button>
    </div>
  );
}

export default RandomPicker;