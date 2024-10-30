import React, { useState } from 'react';
import { Users2 } from 'lucide-react';
import NameInput from './components/NameInput';
import RandomizeControls from './components/RandomizeControls';
import Results from './components/Results';

function App() {
  const [names, setNames] = useState<string[]>([]);
  const [randomizedNames, setRandomizedNames] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[][]>([]);

  const handleNamesUpdate = (newNames: string[]) => {
    setNames(newNames);
    setRandomizedNames([]);
    setGroups([]);
  };

  const handleRandomize = (shuffledNames: string[]) => {
    setRandomizedNames(shuffledNames);
    setGroups([]);
  };

  const handleCreateGroups = (newGroups: string[][]) => {
    setGroups(newGroups);
    setRandomizedNames([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Users2 className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-800">Name Randomizer</h1>
            </div>
            <p className="text-gray-600">
              Add names, randomize their order, or create random groups
            </p>
          </div>

          <NameInput onNamesUpdate={handleNamesUpdate} />
          
          {names.length >= 2 && (
            <RandomizeControls
              names={names}
              onRandomize={handleRandomize}
              onCreateGroups={handleCreateGroups}
            />
          )}

          <Results
            randomizedNames={randomizedNames}
            groups={groups}
          />
        </div>
      </div>
    </div>
  );
}

export default App;