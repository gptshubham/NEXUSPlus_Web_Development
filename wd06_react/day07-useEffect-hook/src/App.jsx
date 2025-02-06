import { useState } from 'react';
import './App.css';
import BackgroundColorChanger from '../src/components/backgroundColorChanger';
import CounterApp from '../src/components/counter';

function App() {
  return (
    <>
      <div id="root" className="flex justify-center items-center">
        <div>
          <BackgroundColorChanger />
          <CounterApp />
        </div>
      </div>
    </>
  );
}

export default App;
