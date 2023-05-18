import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';

//@ts-check
dayjs.extend(duration);

const Timer = ({ timeLeft, timerLabel }) => {
  const timeDisplay = dayjs.duration(timeLeft, 's').format('mm:ss');

  return (
    <div className="flex flex-col justify-center">
      <p className="text-3xl text-center font-bold text-green-600">
        {timerLabel}
      </p>
      <p
        id="time-left"
        className="text-[3rem] text-center font-bold text-green-600"
      >
        {timeDisplay}
      </p>
    </div>
  );
};

export default Timer;
