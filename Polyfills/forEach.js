// forEach polyfill

Array.prototype.myForEach = (cb) => {
  for (let index = 0; index < this.length; index++) {
    cb(this[i], index, this);
  }
};

const cb = (index) => {
  console.log(index * 10);
};

const arr = [10, 20, 30];

arr.forEach(cb);
