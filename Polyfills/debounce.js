// debounce defintion and use case

// Debounce is a technique used to limit the rate at which a function is executed.
// It ensures that the function is only called after a specified delay has passed since the last time it was invoked.
// Use case --> This is useful in scenarios like search input typing, window resizing, or button clicks to reduce unnecessary function calls.

// debounce polyfill implementation

function getData() {
  console.log("Debounce method called");
}

// debounce polyfill

function customDebounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const callDebounce = customDebounce(getData, 3000);
