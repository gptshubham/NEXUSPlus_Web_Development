import React from 'react';
import Card from '../Components/Cards';
import data from '../data.json';

// Header Component
// Body Components: Card
// Footer Component

function App() {
  return (
    <>
      <div className=" flex gap-[10px] flex-wrap justify-center">
        {data.map((data, index) => (
          // Example data passed to Card JSX function
          <Card
            key={index}
            cloth={data.name}
            offer={data.offer}
            image={data.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
