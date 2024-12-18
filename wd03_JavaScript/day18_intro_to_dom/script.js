// Accessing Elements

// getElementById()

console.log(document.getElementById('first').innerHTML);

document.getElementById('first').innerHTML = '<i>Mugambo Khush Hua</i>';

console.log(document.getElementById('first').innerHTML);
console.log(document.getElementById('first').innerText);

const heading_id = document.getElementById('first');
console.log(heading_id);

const firstH2 = heading_id.nextElementSibling;

console.log(firstH2);

heading_id.id = 'header';
// firstH2.className = 'sub-heading_id';

// getElementsByClassName()

const heading_class = document.getElementsByClassName('header1');

console.log(heading_class);
console.log(heading_class[0]);
console.log(heading_class[1]);
heading_class[1].id = 'sub-heading-1';

// changing styles of h2 using DOM
heading_class[1].style.backgroundColor = 'hotpink';
heading_class[1].style.padding = '20px';
heading_class[1].style.borderRadius = '10px';
heading_class[1].style.fontFamily = 'Helvetica, sans-serif';
heading_class[1].style.boxSizing = 'border-box';
heading_class[1].style.border = '2px solid';

console.log(typeof heading_class[1].style);
