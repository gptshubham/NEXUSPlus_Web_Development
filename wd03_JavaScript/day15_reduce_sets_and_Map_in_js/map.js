'use strict';
const map1 = new Map();
map1.set(3, 90);
map1.set('skg', 17);
map1.set(true, 'Mohan');
console.log(map1);

// updating values of map
map1.set('skg', 20);
console.log(map1);

// deleting key-value pair
map1.delete('skg');
console.log(map1);

// checking if a property exists in map
let result = map1.has(3);
console.log(result);

result = map1.has('skg');
console.log(result);

// size property
console.log(map1.size);

// clear()
map1.clear();
console.log(map1);

// creating map using new Map(2D Array)
const map2 = new Map([
  [4, 'skg'],
  ['mohan', 'rohan'],
  [30, 9],
]);
console.log(map2);

// Iterating over Map using for of loop and destructuring
for (let [key, value] of map2) console.log(key, value);

// alternatively, using indexing
for (let key of map2) console.log(key[0], key[1]);
