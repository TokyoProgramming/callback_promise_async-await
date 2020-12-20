// Promise
let p = new Promise((resolve, reject) => {
  let a = 2 + 1;
  if (a == 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('this is in the then ' + message);
}).catch((message) => {
  console.log('this is in catch ' + message);
});

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('video 1 recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('video 2 recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('video 3 recorded');
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
