import React, { useContext } from 'react';
import GlobalContext from '../Global';

export default function DecrementButton() {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <>
      <button
        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-4xl"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </>
  );
}
