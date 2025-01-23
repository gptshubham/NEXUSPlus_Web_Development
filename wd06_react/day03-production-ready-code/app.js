import React from 'react';
import ReactDOM from 'react-dom/client';

// React root container
const root = ReactDOM.createRoot(document.querySelector('#root'));
/*
const h1 = React.createElement(
  'h1',
  {
    id: 'first',
    className: 'heading',
    style: {
      color: 'red',
      backgroundColor: '#333',
      padding: '10px',
      fontFamily: 'sans-serif',
    },
  },
  'Hello Coder Army'
);

const h2 = React.createElement(
  'h2',
  {
    id: 'second',
    className: 'heading',
    style: {
      color: 'green',
      backgroundColor: '#333',
      padding: '10px',
      fontFamily: 'sans-serif',
    },
  },
  'Hello React'
);

// root.render(h1);
// root.render(h2);

// root.render([h1, h2]);

// alternatively: can create a div to contain h1 and h2

const div1 = React.createElement('div', {}, [h1, h2]);

root.render(div1);
*/
/*
const root = ReactDOM.createRoot(document.querySelector('#root'));

const p = React.createElement(
  'p',
  { style: { fontFamily: 'sans-serif' } },
  'Hello JavaScript'
);

const h1 = React.createElement('h1', {}, p);

const div1 = React.createElement('div', { id: 'child-div' }, h1);

const div2 = React.createElement('div', { id: 'parent-div' }, div1);

const div3 = React.createElement('div', { id: 'grandpa-div' }, div2);

root.render(div3);

// alternatively:

root.render(
  React.createElement(
    'div',
    { id: 'top-div' },
    React.createElement(
      'div',
      { id: 'middle-div' },
      React.createElement(
        'div',
        { id: 'inner-div' },
        React.createElement(
          'h1',
          {},
          React.createElement(
            'p',
            { style: { fontFamily: 'sans-serif' } },
            'Hello React'
          )
        )
      )
    )
  )
);
*/

// alternatively: JSX (JavaScript XML) --> (Preference 1)
const framework = 'React';

const newElement = (
  <>
    <h1 id="first" className="heading">
      Happy New Year {2025}
    </h1>
    <h2 id="second" className="heading">
      Hello {framework}
    </h2>
  </>
);

// root.render(newElement);

// React Component:
// 1. Class based Component (Legacy)
// 2. Function based Component

function functionComponent() {
  return <h3>Function based React Component!</h3>;
}

const newElement2 = functionComponent();

root.render(newElement2);

const arrowFunctionComponent = () => {
  return <h3>Arrow Function Component</h3>;
};

const newElement3 = arrowFunctionComponent();

const parentElement = (
  <>
    {newElement}
    {newElement2}
    {newElement3}
  </>
);
root.render(parentElement);
