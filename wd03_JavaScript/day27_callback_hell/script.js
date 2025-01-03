// Callback
function fetchuser(callback) {
  console.log('Fetching the user details......');
  setTimeout(() => {
    console.log('Data Fetched Successfully');
    const obj = {
      name: 'Shubahm',
      surname: 'Gupta',
      age: 20,
      city: 'Ghosty',
      state: 'euphoria',
      country: 'bumpkin',
    };
    // data fetched from backend (simulation)
    // greet(name);
    callback(obj);
    // meet(name);
  }, 2000);
}

function greet(obj) {
  console.log(`Hello ${obj.name}!`);
}

function meet(obj) {
  console.log(
    `Hello ${obj.name}, I will meet you tomorrow morning at sharp 7.`
  );
}

function edit(obj) {
  console.log(`Edit ${obj.name} of the user.`);
}

function printAge(obj) {
  console.log(obj.age);
}
fetchuser(greet);
// fetchuser(meet);
// fetchuser(edit);
fetchuser(printAge);
