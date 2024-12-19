// querySelector()
const h1 = document.querySelector('h1');

h1.innerHTML = '<i>HELLO CODER <strong style="display: none">ARMY</strong></i>';

// innerHTML vs innerText vs textContent
console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.textContent);
// innerText vs textContent : textContent is more performant as innerText gives regard to the styles which may cause layout related problems. textContent doesn't give any regard to styles and hence it's more performance friendly

const h2 = document.querySelector('#second');

h2.style.backgroundColor = 'hotpink';
h2.style.display = 'inline-block';
h2.style.padding = '10px 20px';
h2.style.fontFamily = 'helvetica, sans-serif';
h2.style.margin = '0';
h2.style.border = '2px solid pink';
h2.style.borderRadius = '5px';

const ul = document.querySelector('.header2');
ul.style.width = '200px';
ul.style.margin = '20px';
ul.style.backgroundColor = 'coral';
ul.style.borderRadius = '5px';

const headers = document.querySelectorAll('.header1');

headers[0].style.margin = '20px';
headers[1].style.margin = '20px';

const listItems = document.querySelectorAll('.list-item');
console.log(listItems);
console.log(typeof listItems);

// Iterating over NodeList

// using for loop
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = 'darkred';
}

// using for of loop
for (let item of listItems) {
  item.style.color = 'darkgreen';
}

// using forEach()
listItems.forEach((item) => (item.style.color = 'darkblue'));

// converting NodeList into Array
const listItemsArray = Array.from(listItems);
console.log(listItemsArray);
console.log(typeof listItemsArray);

// using different CSS Selectors with querySelector() (other than id and class selectors)

// descendent selector
const firstListItem = document.querySelector('ul li');
console.log(firstListItem);

firstListItem.innerHTML = 'Computer Networks';

// nth-child selector
const lastListItem = document.querySelector('#third > li:nth-child(4)');
lastListItem.innerHTML = 'JavaScript';

// element selectors
const heading = document.querySelector('h1');
heading.innerHTML = 'Web Development'; // we removed <i></i> from h1 content
heading.style.fontFamily = 'helvetica, sans-serif';

// getElementsByTagName()

const liElements = document.getElementsByTagName('li');
console.log(liElements);
console.log(liElements[0]);
console.log(liElements[3]);

for (let i = 0; i < liElements.length; i++) {
  liElements[i].style.fontWeight = '600';
}

for (let el of liElements) {
  el.style.color = 'white';
}

// liElements.forEach((item) => (item.style.fontWeight = '800'));
// // TypeError: liElements.forEach is not a function -> forEach is not available for HTMLCollection

// converting HTMLCollection into an Array

const liElementsArray = Array.from(liElements);
liElementsArray.forEach(
  (item) => (item.style.fontFamily = 'helvetica, sans-serif')
);

// Accessing using Relationship Properties

// parentElement
const listParent = lastListItem.parentElement;
console.log(listParent);

// parentNode
const listParent1 = firstListItem.parentNode;
console.log(listParent1);

// children
const listChildren = ul.children;
console.log(listChildren);
console.log(listChildren.length);

// childNodes
const listChildNodes = ul.childNodes;
console.log(listChildNodes);
console.log(listChildNodes.length);
console.log(listChildNodes[2]);

// firstChild
const firstListChild = ul.firstChild;
console.log(firstListChild);

// firstElementChild
const firstListChildElement = ul.firstElementChild;
console.log(firstListChildElement);

// lastChild
const lastListChild = ul.lastChild;
console.log(lastListChild);

// lastElementChild
const lastListChildElement = ul.lastElementChild;
console.log(lastListChildElement);

// nextSibling
const h1NextSibling = h1.nextSibling;
console.log(h1NextSibling);

// nextElementSibling
const h1NextSiblingElement = h1.nextElementSibling;
console.log(h1NextSiblingElement);

const h2PrevSibling = h2.previousSibling;
console.log(h2PrevSibling);

const h2PrevSiblingElement = h2.previousElementSibling;
console.log(h2PrevSiblingElement);
