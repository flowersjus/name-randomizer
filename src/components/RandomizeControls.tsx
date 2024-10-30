import React, { useState } from 'react';
import { Shuffle, Users } from 'lucide-react';

interface RandomizeControlsProps {
  names: string[];
  onRandomize: (names: string[]) => void;
  onCreateGroups: (groups: string[][]) => void;
}

export default function RandomizeControls({
  names,
  onRandomize,
  onCreateGroups,
}: RandomizeControlsProps) {
  const [groupSize, setGroupSize] = useState(2);

  const handleRandomize = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    onRandomize(shuffled);
  };

  const handleCreateGroups = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    const groups: string[][] = [];
    
    for (let i = 0; i < shuffled.length; i += groupSize) {
      groups.push(shuffled.slice(i, i + groupSize));
    }
    
    onCreateGroups(groups);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="flex gap-4">
        <button
          onClick={handleRandomize}
          disabled={names.length < 2}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Shuffle className="w-5 h-5" />
          Randomize Order
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="number"
          min="2"
          max={names.length}
          value={groupSize}
          onChange={(e) => setGroupSize(Math.min(names.length, Math.max(2, parseInt(e.target.value) || 2)))}
          className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleCreateGroups}
          disabled={names.length < 2}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Users className="w-5 h-5" />
          Create Groups
        </button>
      </div>
    </div>
  );
}