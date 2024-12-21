// creating element and appending it to the parent element
/*
// document.createElement() to create element
const ts = document.createElement('li');

ts.innerHTML = 'TS';

// selecting parent element
const ul = document.querySelector('#root');

// appending child element to the parent element
ul.append(ts);
*/

// Program: define a function that can generate and attach elements dynamically

function attach(id, child, content) {
  // selecting parent element
  const parentElement = document.querySelector(`#${id}`);

  // creating child element
  const childElement = document.createElement(`${child}`);

  // creating content of child element
  childElement.innerHTML = content;

  // appending child element into parent element
  parentElement.append(childElement);
}

attach('root', 'li', 'React.js');
attach('root', 'li', 'TS');
attach('root', 'li', 'Node.js');

// ***************** Text Node *******************

const textNode = document.createTextNode('Hello Coder Army');

const h3 = document.createElement('h3');
document.body.append(h3);

h3.append(textNode);

// ***************** Attribute Node *******************

/*
const attribute = document.createAttribute('id');
attribute.value = 'third';

const thirdListItem = document.querySelector('ul > li:nth-child(3)');

thirdListItem.setAttributeNode(attribute);

// alternatively, we can simply use id property
const fifthListItem = document.querySelector('ul > li:nth-child(5)');
fifthListItem.id = 'fifth';

// so, when do we use createAttribute() ---> uncommon attribute names
const uncommonAttribute = document.createAttribute('country');
uncommonAttribute.value = 'India';

const lastListElement = document.querySelector('ul > li:nth-child(7)');

lastListElement.setAttributeNode(uncommonAttribute);

const target = document.querySelector('[country]');
target.style.color = 'coral';
// we used the attribute created above to select the last list item and style it, which obviously doesn't make any sense if could select the same in the first place without creating a separate attribute

// Accessing Attributes of an element

const element = document.querySelector('#root');

// getAttribute()
console.log(element.getAttribute('id'));
console.log(element.getAttribute('class'));
console.log(element.getAttribute('style'));

// Alternatively: using attribute's property name
console.log(element.id);
console.log(element.className);

// setAttribute()
element.setAttribute('custom', 'skg');
element.setAttribute('class', 'list');

// removeAttribute()
element.removeAttribute('custom');
*/

//****************** Adding Nodes to DOM *********************

const parent = document.querySelector('#root');

// prepend()
const child = document.createElement('li');
child.innerHTML = 'CT';

parent.prepend(child);
// parent.append(child);

// insertBefore()
const newChild = document.createElement('li');
newChild.innerHTML = 'Bootstrap';

const child2 = document.querySelector('ul > li:nth-child(6)');
parent.insertBefore(newChild, child2);

// replaceChild()
const newChild2 = document.createElement('li');
newChild2.innerHTML = 'Tw';

const childToReplace = document.querySelector('ul > li:nth-child(6)');
parent.replaceChild(newChild2, childToReplace);

// alternatively: using innerHTML/innerText/textContent

newChild2.innerHTML = 'Tailwind';

// insertAdjacentElement()

const sibling = document.querySelector('ul');
const adjacentSibling = document.createElement('div');
adjacentSibling.innerHTML = 'Winter is Coming!';

sibling.insertAdjacentElement('beforebegin', adjacentSibling);
// sibling.insertAdjacentElement('afterbegin',adjacentSibling);
// sibling.insertAdjacentElement('beforeend', adjacentSibling);
// sibling.insertAdjacentElement('afterend', adjacentSibling);

//********** Deleting element or node **************************

// remove()
let ct_remove = document.querySelector('li');
ct_remove.remove();
ct_remove = null;
// we do it to clear the memory as the variable ct_remove still points to the elements removed => it's still stored in memory, so form performance point of view, so we set ct_remove to null which releases the removed element form memory

// removeChild()
let ts_remove = document.querySelector('ul > li:nth-child(7)');
parent.removeChild(ts_remove);
ts_remove = null;
