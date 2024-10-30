import React, { useState } from 'react';
import { Users, Shuffle } from 'lucide-react';

interface GroupGeneratorProps {
  names: string[];
}

function GroupGenerator({ names }: GroupGeneratorProps) {
  const [groupSize, setGroupSize] = useState<number>(2);
  const [groups, setGroups] = useState<string[][]>([]);

  const generateGroups = () => {
    if (names.length === 0) return;

    // Shuffle names
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    const newGroups: string[][] = [];
    
    // Create groups
    for (let i = 0; i < shuffled.length; i += groupSize) {
      newGroups.push(shuffled.slice(i, i + groupSize));
    }
    
    setGroups(newGroups);
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          People per group
        </label>
        <input
          type="number"
          min="2"
          max={Math.max(2, names.length)}
          value={groupSize}
          onChange={(e) => setGroupSize(Math.max(2, Math.min(names.length, parseInt(e.target.value) || 2)))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        onClick={generateGroups}
        disabled={names.length < 2}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center mb-6"
      >
        <Shuffle className="w-5 h-5" />
        Generate Groups
      </button>

      {groups.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="font-medium text-indigo-600 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Group {index + 1}
              </div>
              <ul className="space-y-1">
                {group.map((name, nameIndex) => (
                  <li key={nameIndex} className="text-gray-700">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GroupGenerator;