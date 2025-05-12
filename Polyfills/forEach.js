// forEach polyfill

Array.prototype.myForEach = function(cb){
  for (let index = 0; index < this.length; index++) {
    cb(this[index], index, this);
  }
};

const cb = (element) => {
  console.log(element * 10);
};

const arr = [10, 20, 30];

arr.myForEach (cb);
