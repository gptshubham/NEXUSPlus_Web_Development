const root = document.querySelector('#root');

// create element using js
const h1 = document.createElement('h1');
h1.innerText = 'Hello Coder Army';
h1.style.backgroundColor = 'coral';
h1.style.fontSize = '30px';
h1.style.color = 'white';
h1.style.padding = '10px';

const h2 = document.createElement('h2');
h2.innerText = 'Hello world';
h2.style.backgroundColor = 'orangered';
h2.style.fontSize = '24px';
h2.style.color = 'white';
h2.style.padding = '10px';

root.append(h1, h2);

// Custom Mini React --> understanding how React works
const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);
    if (typeof children === 'object') {
      for (let child of children) {
        element.append(child);
      }
    } else {
      element.innerText = children;
    }
    for (let key in styles) {
      element.style[key] = styles[key];
    }
    return element;
  },
};

// Custom Mini ReactDOM --> to manipulate DOM
const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

const h3 = React.createElement(
  'h3',
  { backgroundColor: 'red', color: 'white', fontSize: '18px', padding: '10px' },
  'Hello JavaScript'
);

const h4 = React.createElement(
  'h4',
  { backgroundColor: 'blue', color: 'white', fontSize: '14px', padding: '8px' },
  'Hello React'
);

const p = React.createElement(
  'p',
  { backgroundColor: '#333', color: 'white', fontSize: '12px', padding: '8px' },
  'lorem ipsum dolor'
);

ReactDOM.render(h3, root);
ReactDOM.render(h4, root);
ReactDOM.render(p, root);

const firstItem = React.createElement('li', {}, 'HTML');
const secondItem = React.createElement('li', {}, 'CSS');
const thirdItem = React.createElement('li', {}, 'JavaScript');

const ul = React.createElement('ul', {}, [firstItem, secondItem, thirdItem]);

ReactDOM.render(ul, root);
