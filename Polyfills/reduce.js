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
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }

  let acc;
  let startIndex;

  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};


const resultReduce = arr.customReduce(function (acc, cur) {
  return acc + cur;
});
console.log("result custom Reduce:", resultReduce);
