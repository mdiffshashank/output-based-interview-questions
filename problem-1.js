/**
 * Great question
 */

function Person() {
  this.age = 25;
  //   setTimeout(() => {
  //     function growup() {
  //       this.age++;
  //       console.log(this.age);
  //     }
  //     growup();
  //   }, 1000);
  function growup() {
    this.age++;
    console.log(this.age);
  }
  growup();
}
let p = new Person();

// function Person() {
//   this.age = 25;
//   setTimeout(() => {
//     const growup = () => {
//       this.age++;
//       console.log(this.age);
//     };
//     growup();
//   }, 1000);
// }
// let p2 = new Person();
