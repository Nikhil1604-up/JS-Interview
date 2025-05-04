// map polyfill

const arr = [5, 10, 15, 20, 25];

Array.prototype.myMap = function (cb) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(cb(this[index], index, this));
  }
  return result;
};

const resultArr = arr.myMap((el) => el * 5);
