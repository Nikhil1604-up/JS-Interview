function add(a, b) {
  console.log("Computing result");
  return a + b;
}

const memoize = function (fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (key in cache) return cache[key];
    let result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
};

// Create a memoized version of add
const memoizedAdd = memoize(add);
