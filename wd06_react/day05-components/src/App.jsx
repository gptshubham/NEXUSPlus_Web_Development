import { useState } from 'react';
import './App.css';
import Card from './app/components/Cards';
import Header from './app/components/Header';
import Footer from './app/components/Footer';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="pt-25">
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
