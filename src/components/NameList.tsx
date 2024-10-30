import React from 'react';
import { Trash2 } from 'lucide-react';

interface NameListProps {
  names: string[];
  onRemove: (index: number) => void;
}

function NameList({ names, onRemove }: NameListProps) {
  if (names.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
        Add some names to get started...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {names.map((name, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg group"
        >
          <span className="text-gray-700">{name}</span>
          <button
            onClick={() => onRemove(index)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default NameList;