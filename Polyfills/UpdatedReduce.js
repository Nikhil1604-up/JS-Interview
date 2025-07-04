Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc !== undefined ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const result = [1, 2, 3].myReduce((acc, val) => acc + val, 0);
console.log(result); // 6
