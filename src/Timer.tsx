import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';

//@ts-check
dayjs.extend(duration);

const Timer = ({ timeLeft, timerLabel, buttonLabel, startStop, resetTimer }) => {
  const timeDisplay = dayjs.duration(timeLeft, 's').format('mm:ss');

  return (
    <div className="flex flex-col justify-center">
      <p className="text-3xl text-center font-bold text-green-600">
        {timerLabel}
      </p>
      <p
        id="time-left"
        className="text-[3rem] text-center font-bold text-green-600 mt-6"
      >
        {timeDisplay}
      </p>
      <div className="flex flex-row justify-center mt-6 gap-3">
        <button
          id="start_stop"
          className="font-bold text-rose-700 bg-green-600 hover:text-green-600 hover:bg-rose-700 rounded-full px-8 py-9 max-w-max transition duration-300 ease-in"
          onClick={startStop}
        >
          {buttonLabel}
        </button>
        <button
          id="reset"
          className="font-bold text-rose-700 bg-green-600 hover:text-green-600 hover:bg-rose-700 rounded-full px-7 py-9 max-w-max transition duration-300 ease-in"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
