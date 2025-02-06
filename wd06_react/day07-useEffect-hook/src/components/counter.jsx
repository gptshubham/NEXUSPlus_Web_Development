import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  console.log('counter executed');

  return (
    <div className="px-10 py-5  bg-amber-200 rounded-4xl mt-5">
      <div className="text-zinc-600">
        <div className="text-3xl font-bold mb-5">Counter is: {count}</div>
      </div>
      <div className="text-white font-semibold">
        <button
          className="px-3 py-2 mr-5 bg-green-700 hover:bg-green-600 rounded-2xl transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100 "
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          className="px-3 py-2 mr-5 bg-red-700 hover:bg-red-600 rounded-2xl transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
