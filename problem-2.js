console.log(1);
setTimeout(() => console.log(2), 0); //async
Promise.resolve().then(() => console.log(3)); //async micro
Promise.resolve().then(() => setTimeout(() => console.log(4), 0)); //async micro macro
Promise.resolve().then(() => console.log(5)); //async micro
setTimeout(() => console.log(6), 0); //async macro
console.log(7);

/**
 * 1,
 * 7,
 * 3,
 * 5,
 * 2,
 * 6,
 * 4
 */
