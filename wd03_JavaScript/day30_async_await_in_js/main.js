function test1() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise Resolved');
    }, 5000);
  });

  return p1;
}

function test2() {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise Resolved');
    }, 5000);
  });

  return p2;
}

/*
async function greet() {
  console.log('Greetings...');

  const data1 = await test1(); // micro task queue
  console.log(data1);

  const data2 = await test2(); // micro task queue
  console.log(data2);
}
*/

// How to run test1 and test2 Parallelly: only if task1 and task2 are independent of each other

async function greet() {
  console.log('Greetings...');

  const [data1, data2] = await Promise.all([test1(), test2()]);
  // micro task queue
  console.log(data1);
  console.log(data2);
}
greet();

console.log('Hello Coder Army');
console.log('Captain Jack Sparrow');

// Greetings...
// Hello Coder Army
// Captain Jack Sparrow
// First Promise Resolved
// Second Promise Resolved
