// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// In JavaScript, a prototype is an object from which other objects inherit properties and methods

const obj = {
  name: "nikhil",
  city: "Delhi",
};

console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__ == Object.prototype); // true
// This is a property on the constructor function <-- prototype

//
