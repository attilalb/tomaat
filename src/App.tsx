import { useState } from 'react';
import Break from './Break';
import Session from './Session';

function App() {
  const [isSession, setIsSession] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-green-600 text-center text-5xl mb-6">
        Tomaat.
      </h1>
      <div id="controls" className="flex gap-[4rem] justify-center ">
        <Break />
        <Session />
      </div>
      <div id="timer" className="mt-6 text-center">
        {isSession ? (
          <div className="flex flex-col gap-2">
            <h2 id="timer-label" className="text-3xl font-bold text-green-600">
              Session
            </h2>
            <span className="text-[3rem] font-bold text-green-600"></span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 id="timer-label" className="text-3xl font-bold text-green-600">
              Break
            </h2>
            <span className="text-[3rem] font-bold text-green-600"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
