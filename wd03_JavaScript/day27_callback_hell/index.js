// Callback Hell

// Zomato Pizza Order Simulation

function placeOrder(callback) {
  console.log(`Tacking with Zomato Guy...`);

  // Order placement simulation
  setTimeout(() => {
    console.log(`Order Placed Successfully...`);
    callback();
  }, 2000);
}

function preparingOrder(callback) {
  console.log('Pizza Preparation Started...');

  // pizza preparation simulation
  setTimeout(() => {
    console.log('Pizza ready for delivery...');
    callback();
  }, 5000);
}

function orderPickUp(callback) {
  console.log(`Reaching Restaurant for Picking Up the Order...`);

  // pizza pick up simulation
  setTimeout(() => {
    console.log(`Order Picked Up by the Delivery Boy...`);
    callback();
  }, 3000);
}

function orderDelivery(callback) {
  console.log(`Order Out for Delivery...`);

  // order delivery simulation
  setTimeout(() => {
    console.log(`Order Delivered Successfully...`);
    callback();
  }, 5000);
}

function orderRating() {
  console.log(`Awaiting Rating from Customer...`);

  // rating simulation
  setTimeout(() => {
    console.log(`Rating received...`);
  }, 3000);
}
// placeOrder();
// preparingOrder();
// orderPickUp();
// orderDelivery();
// orderRating();

// placeOrder(preparingOrder);

placeOrder(() => {
  preparingOrder(() => {
    orderPickUp(() => {
      orderDelivery(() => {
        orderRating();
      });
    });
  });
});
// It seems a good thing, because we are able to do what we want to do.
// Then why it'a called a hell ? ==>
// --> Code Readability
// --> ownership
