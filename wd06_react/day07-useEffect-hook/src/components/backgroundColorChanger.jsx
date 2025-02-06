import React, { useEffect, useState } from 'react';

function BackgroundColorChanger() {
  const [color, setColor] = useState('black');

  console.log('render');

  // document.body.style.backgroundColor = color;

  // useEffect (callback Function, dependency)
  useEffect(() => {
    document.body.style.backgroundColor = color;
    console.log('useEffect Executed');
  }, [color]);

  return (
    <>
      <div className="bg-cyan-200 p-20 rounded-3xl">
        <h1 className="text-4xl font-bold mb-5 text-zinc-600">
          Background Color Changer
        </h1>
        <div className="text-white font-semibold">
          <button
            className="px-5 py-3 rounded-2xl bg-red-600 ml-3 hover:bg-red-500 transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100"
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="px-5 py-3 rounded-2xl bg-blue-600 ml-3 hover:bg-blue-500 transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100"
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="px-5 py-3 rounded-2xl bg-green-600 ml-3 hover:bg-green-500 transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100"
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="px-5 py-3 rounded-2xl bg-orange-600 ml-3
        hover:bg-orange-500 transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100"
            onClick={() => setColor('orange')}
          >
            Orange
          </button>
          <button
            className="px-5 py-3 rounded-2xl bg-pink-600 ml-3
        hover:bg-pink-500 transform transition duration-200 hover:scale-105 border border-gray-300 hover:border-gray-500 shadow-md hover:shadow-lg cursor-pointer active:scale-100"
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(BackgroundColorChanger);
