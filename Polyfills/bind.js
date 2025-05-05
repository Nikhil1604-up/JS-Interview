// bind method working

const obj = {
  firstName: "Nikhil",
  lastName: "Upadhyay",
};

const printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      "," +
      state +
      "," +
      country
  );
};

// printName.bind(obj)();

// polyfill for bind

Function.prototype.myBind = function (...args) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }
  let fn = this;
  let context = args[0];
  let params = args.slice(1);

  return function (...funcArgs) {
    return fn.apply(context, [...params, ...funcArgs]);
  };
};

const printName2 = printName.myBind(obj, "Gorakhpur", "UP");
printName2("India");
