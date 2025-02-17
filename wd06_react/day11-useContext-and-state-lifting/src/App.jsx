import { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import IncrementButton from './components/increment';
import DecrementButton from './components/decrement';
import GlobalContext from './Global';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalContext.Provider value={{ count, setCount }}>
        {/* <Counter count={count} />
        <IncrementButton count={count} setCount={setCount} />
        <DecrementButton count={count} setCount={setCount} /> */}
        <Counter />
        <IncrementButton />
        <DecrementButton />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
