import { useEffect, useState } from 'react';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';
import { GiTomato } from 'react-icons/gi';

function App() {
  const [isSession, setIsSession] = useState<boolean>(true);
  const [sessionLength, setSessionLength] = useState<number>(25 * 60);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [pause, setPause] = useState(true);
  const [currentSession, setCurrentSession] = useState('Session');

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

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const changeTime = () => {
    if (timeLeft > 0) {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }
    if (timeLeft === 0) {
      if (currentSession === 'Session') {
        setCurrentSession('Break');
        setTimeLeft(breakLength);
      } else {
        setTimeLeft(sessionLength);
        setCurrentSession('Session');
      }
    }
  };

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(changeTime, 1000);
      return () => clearInterval(interval);
    }
  });

  const startTimer = () => {
    setPause(false);
  };

  const stopTimer = () => {
    setPause(true);
  };

  const startStop = () => {
    pause ? startTimer() : stopTimer();
  };

  const resetTimer = () => {
    setSessionLength(1500);
    setBreakLength(300);
    setCurrentSession('Session');
    setTimeLeft(sessionLength);
    setPause(true);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-green-600 text-center justify-center flex text-5xl mb-6">
        <span>
          <GiTomato />
        </span>
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
      <Timer
        timeLeft={timeLeft}
        timerLabel={currentSession}
        buttonLabel={pause ? 'Start' : 'Stop'}
        startStop={startStop}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
