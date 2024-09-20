console.log("Start");
setTimeout(() => {
  console.log("Timer");
}, 0); //async
Promise.resolve("Resolved").then((res) => console.log(res)); //micro
setTimeout(() => {
  console.log("Timer 20");
}, 20); //async
setImmediate(() => console.log("SetImmediate")); //async
process.nextTick(() => console.log("Next Tick"));
console.log("Completed");

/**
 * start
 * completed
 * Next Tick
 * Resolved
 * SetImmediate
 * Timer
 * Timer 20
 */
