// problem with callback hell

/*
const cart = ['Pizza', 'Coke', 'Sandwich'];

function placeOrder(cart, callback) {
  console.log(`Talking with Zomato Guy...`);

  // Order placement simulation
  setTimeout(() => {
    console.log(`Order Placed Successfully...`);
    const order = {
      orderId: 221,
      food: cart,
      restaurant: 'Dominos',
      location: 'French Street',
    };
    callback(order);
  }, 2000);
}

function preparingOrder(order, callback) {
  console.log('Pizza Preparation Started...');

  // pizza preparation simulation
  setTimeout(() => {
    console.log('Pizza ready for delivery...');
    const foodDetails = {
      token: 12,
      restaurant: order.restaurant,
      location: order.location,
    };
    callback(foodDetails);
  }, 5000);
}

function orderPickUp(foodDetails, callback) {
  console.log(`Reaching Restaurant for Picking Up the Order...`);

  // pizza pick up simulation
  setTimeout(() => {
    console.log(`Order Picked Up by the Delivery Boy...`);
    const dropLocation = foodDetails.location;
    callback(dropLocation);
  }, 3000);
}

function orderDelivery(dropLocation) {
  console.log(`Order Out for Delivery...`);

  // order delivery simulation
  setTimeout(() => {
    console.log(`Order Delivered Successfully...`);
  }, 5000);
}

placeOrder(cart, (order) => {
  preparingOrder(order, (foodDetails) => {
    orderPickUp(foodDetails, (dropLocation) => {
      orderDelivery(dropLocation);
    });
  });
});
*/

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

placeOrder(cart)
  .then((order) => preparingOrder(order))
  .then((foodDetails) => orderPickUp(foodDetails))
  .then((dropLocation) => orderDelivery(dropLocation))
  .catch((error) => console.log(error));

// creating promise object
// const pr = new Promise(function (resolve, reject) {

// });

// return pr;
