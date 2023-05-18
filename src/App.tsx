import { useState } from 'react';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';

function App() {
  const [isSession, setIsSession] = useState<boolean>(true);
  const [sessionLength, setSessionLength] = useState<number>(25 * 60);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTmeLeft] = useState(sessionLength);

  const sessionLengthPlus = () => {
    return setSessionLength(sessionLength + 60);
  };

  const sessionLengthMinus = () => {
    const newLength = sessionLength - 60;
    newLength < 0 ? setSessionLength(0) : setSessionLength(newLength);
  };

  const breakLengthPlus = () => {
    setBreakLength(breakLength + 60);
  };

  const breakLengthMinus = () => {
    const newLength = breakLength - 60;
    newLength < 0 ? setBreakLength(0) : setBreakLength(newLength);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-green-600 text-center text-5xl mb-6">
        Tomaat.
      </h1>
      <div id="controls" className="flex gap-[4rem] justify-center ">
        <Break
          breakLength={breakLength}
          breakLengthPlus={breakLengthPlus}
          breakLengthMinus={breakLengthMinus}
        />
        <Session
          sessionLength={sessionLength}
          sessionLengthPlus={sessionLengthPlus}
          sessionLengthMinus={sessionLengthMinus}
        />
      </div>
      <Timer timeLeft={timeLeft} timerLabel={isSession ? 'Session' : 'Break'} />
    </div>
  );
}

export default App;
