// Promise.all
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
// It rejects when any of the input's promises rejects,with this first rejection reason.

const requestAPI = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const requestArray = [requestAPI(1000), requestAPI(3000), requestAPI(5000)];

const customPromiseAll = (requestArray) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;
    let isRejected = false;
    if (length === 0) return resolve([]);

    requestArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          if (isRejected) return;
          result[index] = data;
          completed++
          if (completed === requestArray.length) resolve(result);
        })
        .catch((err) => {
          if (!isRejected) {
            isRejected = true;
            reject(err);
          }
        });
    });
  });
};

customPromiseAll(requestArray)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
