import React, { useContext } from 'react';
import GlobalContext from '../Global';

export default function IncrementButton() {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <>
      <button
        className="py-2 px-4 mx-5 bg-green-500 text-white font-semibold rounded-4xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
