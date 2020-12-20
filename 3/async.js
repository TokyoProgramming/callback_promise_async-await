// Sync code example

const otherFunc = () => {
  console.log('we are in another func');
  console.log('do some stuff');
};

// otherFunc();

setTimeout(() => {
  // console.log('we are in the timeout');
}, 2000);

function loginUser(email, password) {
  setTimeout(() => {
    return { userEmail: email };
  }, 1500);
}

const user = loginUser('login@gmail.com', 12345);
// console.log(user);
