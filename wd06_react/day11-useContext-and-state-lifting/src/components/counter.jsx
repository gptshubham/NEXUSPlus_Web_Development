import React, { useContext } from 'react';
// import IncrementButton from './increment';
// import DecrementButton from './decrement';
import GlobalContext from '../Global';

export default function Counter() {
  // const [count, setCount] = useState(0);

  const { count, setCount } = useContext(GlobalContext);
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 ml-5">Count: {count}</h1>
      {/* <IncrementButton count={count} setCount={setCount} />
      <DecrementButton count={count} setCount={setCount} /> */}
    </>
  );
}
