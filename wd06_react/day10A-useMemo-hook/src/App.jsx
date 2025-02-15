import { useState, useMemo, useEffect, useCallback } from 'react';
import './App.css';

// const calculateFibonacci = (n) => {
//   if (n <= 1) return n;

//   return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
// };

function App() {
  let [count, setCount] = useState(0);
  let [numberInput, setNumberInput] = useState(0);
  // let [result, setResult] = useState(0);

  // const calculateFibonacci = (number) => {
  //   if (number <= 0) setFibonacci(0);

  //   if (number > 0) {
  //     if (number === 1) {
  //       setFibonacci(0);
  //     } else if (number === 2) {
  //       setFibonacci(1);
  //     } else {
  //       let current = 1;
  //       let previous = 0;
  //       let output = 0;
  //       for (let i = 0; i < numberInput - 1; i++) {
  //         output = current + previous;
  //         previous = current;
  //         current = output;
  //       }
  //       setFibonacci(output);
  //     }
  //   }
  // };

  const calculateFibonacci = useCallback((n) => {
    if (n <= 1) return n;

    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }, []);

  const result = useMemo(() => calculateFibonacci(numberInput), [numberInput]);

  // useEffect(() => {
  //   setResult(calculateFibonacci(numberInput));
  // }, [numberInput]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full gap-10">
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Count: {count}
          </p>
          <div>
            <button
              className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 active:bg-blue-800 transition duration-200 mr-5"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="px-5 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 active:scale-95 active:bg-red-800 transition duration-200"
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              Decrement
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg space-y-4">
          <div>
            <input
              type="number"
              value={numberInput}
              className="w-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
              placeholder="Enter a number"
              onChange={(e) => setNumberInput(e.target.value)}
            />
            {/* <button
              className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 active:bg-blue-800 transition duration-200 ml-5"
              onClick={() => calculateFibonacci(Number(numberInput))}
            >
              Get Fibonacci
            </button> */}
          </div>
          <p className="text-lg font-medium text-gray-800">
            Fibonacci is: <span className="font-bold">{result}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
