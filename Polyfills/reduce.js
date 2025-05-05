// reduce working to find max value in an array
const arr = [12, 3, 45, 1, 33];

const users = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 32 },
  { firstName: "Arjun", lastName: "Mehta", age: 25 },
  { firstName: "Sara", lastName: "Ali", age: 28 },
  { firstName: "Carlos", lastName: "Diaz", age: 40 },
];

const resultAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const result = arr.reduce(function (max, curr) {
  if (curr > max) max = curr;
  return max;
}, 0);

console.log(resultAge);
console.log(result);

// reduce polyfill

Array.prototype.customReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index]) : this[index];
  }
  return acc;
};

const resultReduce = arr.customReduce(function (acc, cur) {
  return acc + cur;
});
console.log("result custom Reduce:", resultReduce);
