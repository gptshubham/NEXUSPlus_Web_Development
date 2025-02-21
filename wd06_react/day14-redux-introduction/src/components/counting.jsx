import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement, Reset } from '../../Slicer1';

export default function Counting() {
  const count = useSelector((state) => state.slice1.count);
  const dispatch = useDispatch();
  console.log(Increment());
  console.log(Decrement());
  return (
    <div className="flex justify-center items-center h-full p-4">
      <div className="flex flex-col gap-6 md:gap-10 justify-center items-center bg-gray-700 text-white p-6 md:p-20 rounded-2xl w-full max-w-[640px]">
        <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl">
          Count: {count}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={() => dispatch(Increment())}
            className="px-5 py-2 bg-green-400 hover:bg-green-500 active:bg-green-400 active:scale-[98%] rounded-4xl font-semibold"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(Decrement())}
            className="px-5 py-2 bg-red-400 hover:bg-red-500 active:bg-red-400 active:scale-[98%] rounded-4xl font-semibold"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(Reset())}
            className="px-5 py-2 bg-gray-400 hover:bg-gray-500 active:bg-gray-400 active:scale-[98%] rounded-4xl font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
