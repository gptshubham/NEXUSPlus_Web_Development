import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const element1 = (
  <h1 class="text-3xl font-bold underline">Hello Coder Army!</h1>
);
root.render(element1);

function greet() {
  return <h2 class="text-3xl font-bold">Hello JSX!</h2>;
}

const element2 = greet();

root.render(element2);

function Greet(props) {
  // jsx requires the first letter of the function name to be capital letter
  return (
    <h2 class="text-3xl font-bold text-red-500 bg-[#333] p-[10px]">
      Hello JSX Function! This is {props.name}. This is {props.year}.
    </h2>
  );
}

// calling function (the jsx way)
const element3 = <Greet name="SKG" year="2025" />;

// name="SKG" and year="2025" are arguments that we are passing to greet function
// an object will be created, name and year will become keys and "SKG" and "2025" becomes
// the respective values of such keys
// props will be the variable name assigned to the object

// props = {
//   name: "SKG",
//   year: "2025"
// }

root.render(element3);
