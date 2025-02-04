import React, { useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);
  // count is initialized with 0 as value by useState,
  // setCount is a function which is called whenever the the value of count changes to update the new value of count, It's an alias, we can name it anything

  const incrementCount = () => {
    // count += 1;
    // document.querySelector('p').innerText = `Count is: ${count}`;
    // React Alternative for JS's DOM Manipulation --> useState
    setCount(count + 1);
  };

  const decrementCount = () => {
    // count -= 1;
    // document.querySelector('p').innerText = `Count is: ${count}`;
    // React Alternative for JS's DOM Manipulation --> useState
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold">My Counter App</h1>
        <p className="text-3xl font-semibold">Count is: {count}</p>
        <div>
          <button
            className="bg-red-500 font-bold py-3 px-5 text-white rounded mx-5"
            onClick={incrementCount} // Callback Function
          >
            Increment
          </button>
          <button
            className="bg-green-600 font-bold py-3 px-5 text-white rounded"
            onClick={decrementCount} // Callback Function
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
