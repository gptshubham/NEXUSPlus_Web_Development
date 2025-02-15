import { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);

  let money = useRef(0);

  console.log(money);

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Count: {count}
        </p>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 active:bg-blue-700 transition duration-200"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 active:bg-red-700 transition duration-200"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Money: ${money.current}
        </p>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 active:bg-blue-700 transition duration-200"
            onClick={() => {
              money.current += 100;
              console.log(money.current);
            }}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 active:bg-red-700 transition duration-200"
            onClick={() => {
              money.current -= 100;
              console.log(money);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
