import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface NameInputProps {
  onNamesUpdate: (names: string[]) => void;
}

export default function NameInput({ onNamesUpdate }: NameInputProps) {
  const [names, setNames] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState('');

  const addName = () => {
    if (currentName.trim()) {
      const updatedNames = [...names, currentName.trim()];
      setNames(updatedNames);
      onNamesUpdate(updatedNames);
      setCurrentName('');
    }
  };

  const removeName = (index: number) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
    onNamesUpdate(updatedNames);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addName();
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addName}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2">
        {names.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow"
          >
            <span className="text-gray-800">{name}</span>
            <button
              onClick={() => removeName(index)}
              className="text-gray-500 hover:text-red-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}