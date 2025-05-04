const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFilter = function (cb) {
  let resultArr = [];

  for (let index = 0; index < this.length; index++) {
    if (Boolean(cb(this[index], index, this))) {
      resultArr.push(this[index]);
    }
  }
  return resultArr;
};

const result = arr.myFilter((el) => el % 2 === 0);
console.log(result);
