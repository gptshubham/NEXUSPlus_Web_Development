/*
const cart = ['Pizza', 'Coke', 'Sandwich'];

function placeOrder(cart) {
  console.log(`Talking with Zomato Guy...`);

  const pr = new Promise(function (resolve, reject) {
    // Order placement simulation
    setTimeout(() => {
      // simulation: checking if order items are available
      const foodAvailability = true;

      if (foodAvailability) {
        console.log(`Order Placed Successfully...`);
        const order = {
          orderId: 221,
          food: cart,
          restaurant: 'Dominos',
          location: 'French Street',
        };
        resolve(order);
      } else {
        reject('Item out of stock!');
      }
    }, 2000);
  });

  return pr;
}

function preparingOrder(order) {
  console.log('Pizza Preparation Started...');

  const pr = new Promise(function (resolve, reject) {
    // pizza preparation simulation
    setTimeout(() => {
      // simulation: checking if material is available to prepare food items
      const materialAvailability = true;

      if (materialAvailability) {
        console.log('Pizza ready for delivery...');
        const foodDetails = {
          token: 12,
          restaurant: order.restaurant,
          location: order.location,
        };
        resolve(foodDetails);
      } else {
        reject('Material not available!');
      }
    }, 5000);
  });

  return pr;
}

function orderPickUp(foodDetails) {
  console.log(`Reaching Restaurant for Picking Up the Order...`);

  const pr = new Promise(function (resolve, reject) {
    // pizza pick up simulation
    setTimeout(() => {
      // simulation: checking if the restaurant is available
      const restaurantAvailability = true;

      if (restaurantAvailability) {
        console.log(`Order Picked Up by the Delivery Boy...`);
        const dropLocation = foodDetails.location;
        resolve(dropLocation);
      } else {
        reject('Restaurant Not Available!');
      }
    }, 3000);
  });

  return pr;
}

function orderDelivery(dropLocation) {
  console.log(`Order Out for Delivery...`);

  // order delivery simulation
  setTimeout(() => {
    console.log(`Order Delivered Successfully...`);
  }, 5000);
}

// placeOrder(cart)
//   .then((order) => preparingOrder(order))
//   .then((foodDetails) => orderPickUp(foodDetails))
//   .then((dropLocation) => orderDelivery(dropLocation))
//   .catch((error) => console.log(error));

async function placeZomatoOrder() {
  try {
    const order = await placeOrder(cart);
    const foodDetails = await preparingOrder(order);
    const dropLocation = await orderPickUp(foodDetails);
    orderDelivery(dropLocation);
  } catch (error) {
    console.log(error);
  }
}

// placeZomatoOrder();
*/

// async await tricky example 1

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, World!');
  }, 5000);
});

async function greet() {
  const data = await p1;
  console.log(data);

  const data2 = await p1;
  console.log(data2);
  // Note: data2 did not wait for 5 seconds, why?
  // My Take: Bcz promise has already been resolved
}

greet();
*/

// async await tricky example 2

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise Resolved');
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise Resolved');
  }, 5000);
});

async function greet() {
  const data = await p1;
  console.log('Hello Coder Army!');
  console.log(data);

  const data2 = await p2;
  console.log(data2);
  // Note: did not wait for 5 seconds after p1, why?
  // My Take: Bcz p1 and p2 are async tasks and both are being resolved simultaneously
}

greet();
*/

// async await tricky example 3
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise Resolved');
  }, 8000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise Resolved');
  }, 5000);
});

async function greet() {
  const data1 = await p1;
  console.log('Hello Coder Army!');
  console.log(data1);

  const data2 = await p2;
  console.log(data2);
  // Note: did not log to console just after 5 seconds, why?
  // My Take: Bcz, even though p2 has been resolved after 5 seconds, the code to log data2 to console is awaiting for the code to log data1 to the console, which again is awaiting for p1 to resolve for 8 seconds
}

greet();
*/

// async await tricky example 4

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise Resolved');
  }, 8000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise Resolved');
  }, 5000);
});

p1.then((data) => console.log(data));

p2.then((data) => console.log(data));

// Note: p2's data is logged to console first, why?
// My Take: p2 is not dependent on p1, also, code to log the data of p2 is also not dependent on the code to log the data of p1, hence, since p2 is resolved first, it's data is logged to the console first.
*/

// async await tricky example 5

/*
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

async function greet() {
  const data1 = await test1();
  console.log(data1);

  const data2 = await test2();
  console.log(data2);
  // Note: data2 waits for 5 more seconds after data1, why?
  // My Take: Bcz the calling of text2 function (in which second promise is wrapped) is dependent on the calling of test1 function and resolution of first promise. we are calling test2 function after the first promise (p1) has been resolved, hence data2 waits another 5 seconds for p2 to be resolved
}

greet();
*/

// async await tricky example 6

/*
async function meet() {
  return 'Hello, World!';
}

meet().then((value) => console.log(value));

console.log(meet());
// Promise { 'Hello, World!' }

console.log(meet().then());
// Promise { <pending> }

// console.log(meet().then(data));
// // ReferenceError: data is not defined

async function test3() {}

test3().then((data) => console.log(data));
// undefined
*/
