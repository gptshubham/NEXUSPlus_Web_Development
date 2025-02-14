let b = 40;

function greet() {
  let a = 20;
  console.log(a);
  console.log(b);

  function meet() {
    console.log(a);
  }

  return meet;
}

greet();
// console.log(a);
// ReferenceError: a is not defined

const num = greet();
console.log(num);
num();
