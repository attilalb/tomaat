import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export default function Session({
  sessionLength,
  sessionLengthPlus,
  sessionLengthMinus,
}) {
  const sessionDisplay = dayjs.duration(sessionLength, 'seconds').minutes();

  return (
    <div id="session-controls" className="flex flex-col gap-3">
      <h3 className="font-bold text-green-600 text-3xl">Session Length</h3>
      <div className="flex gap-3 justify-between text-2xl items-center">
        <button
          id="session-decrement"
          className="text-green-600 p-4"
          onClick={sessionLengthMinus}
        >
          -
        </button>
        <span className="font-bold text-green-600">{sessionDisplay}</span>
        <button
          id="session-increment"
          className="text-green-600 p-4"
          onClick={sessionLengthPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
