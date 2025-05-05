// call method

const obj = {
  firstName: "Nikhil",
  lastName: "Upadhyay",
};

const printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

printName.call(obj);

// call polyfill implementation

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }

  const fnKey = Symbol();
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];

  return result;
};

// const fnKey = Symbol()	--> Creates a safe, unique temp key
// context[fnKey] = this	--> Temporarily attaches function to obj
// context[fnKey](...args)	--> Calls function with correct this
// delete context[fnKey]	--> Cleans up the object
// return result	        --> Returns the result of the call
