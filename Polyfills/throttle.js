// Throttling defintion and use case
// Throttling is a technique used to limit the number of times a function is executed over time. Specifically, it ensures a function runs at most once every X milliseconds,
// no matter how many times it’s triggered during that interval.
// Use case --> Button spamming-->  Prevent multiple submissions or rapid API requests

const getThrottleData = () => {
  console.log("Throttle function is executed");
};

// throttle polyfill

const customThrottle = function (fn, limit) {
  let flag = true;

  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const callThrottle = customThrottle(getThrottleData, 3000);
