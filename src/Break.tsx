import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export default function Break({
  breakLength,
  breakLengthPlus,
  breakLengthMinus,
}) {
  const breakDisplay = dayjs.duration(breakLength, 'seconds').minutes();
  return (
    <div id="break-controls" className="flex flex-col gap-3">
      <h3 className="font-bold text-green-600 text-3xl">Break Length</h3>
      <div className="flex gap-3 justify-between text-2xl items-center">
        <button
          id="break-decrement"
          className="text-green-600 p-4"
          onClick={breakLengthMinus}
        >
          -
        </button>
        <span className="font-bold text-green-600"> {breakDisplay} </span>
        <button
          id="break-increment"
          className="text-green-600 p-4"
          onClick={breakLengthPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
