import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import stores from '../Store';
import Counting from './components/counting';
import { reactSlicer } from '../Slicer1';

function App() {
  // console.log(stores);
  console.log(reactSlicer);

  return (
    <Provider store={stores}>
      <Counting />
    </Provider>
  );
}

export default App;
