// apply method working

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
// printName.apply(obj, ["Gorakhpur", "U.P", "India"]);

Function.prototype.myApply = function (context = {}, argsArray = []) {
  let fn = Symbol();
  context[fn] = this;

  let result;

  if (Array.isArray(argsArray)) {
    result = context[fn](...argsArray);
  } else if (argsArray === null) {
    result = context[fn]();
  } else {
    throw new Error("Provide array as second argument");
  }
  delete context[fn];

  return result;
};

printName.apply(obj, ["Gorakhpur", "U.P", "India"]);
