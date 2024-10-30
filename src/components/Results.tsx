import React from 'react';

interface ResultsProps {
  randomizedNames: string[];
  groups: string[][];
}

export default function Results({ randomizedNames, groups }: ResultsProps) {
  if (!randomizedNames.length && !groups.length) return null;

  return (
    <div className="w-full max-w-md space-y-6">
      {randomizedNames.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Randomized Order</h2>
          <ol className="list-decimal list-inside space-y-2">
            {randomizedNames.map((name, index) => (
              <li key={index} className="text-gray-700">{name}</li>
            ))}
          </ol>
        </div>
      )}

      {groups.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Groups</h2>
          <div className="grid gap-4">
            {groups.map((group, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Group {index + 1}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {group.map((name, nameIndex) => (
                    <li key={nameIndex} className="text-gray-600">{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}