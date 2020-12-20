const textId = document
  .getElementById('text')
  .addEventListener('click', showText);

const jsonId = document
  .getElementById('json')
  .addEventListener('click', showJson);

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => {
    console.error(('Error:', error));
  });
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// async function getJson() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = res.json();

//   console.log(data);
//   return data;
// }

async function getJson() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = res.json();

  return data;
}
// getJson().then((users) => {
//   let output = '';
//   users.forEach((user) => {
//     output += `
// 	<div>${user.id}</div>
// 	<li>${user.name}</li>
// 	<li>${user.username}</li>

// 	`;
//   });
//   document.body.innerHTML = output;
// });

async function getText() {
  const text = await fetch('simple.txt');
  const re = text.text();

  return re;
}
function showText() {
  getText().then((data) => console.log(data));
}

function showJson() {
  getJson().then((data) => console.log(data));
  getJson().then((users) => {
    let output = '';
    users.forEach((user) => {
      output += `
	  <div>${user.id}</div>
	  <li>${user.name}</li>
	  <li>${user.username}</li>
  
	  `;
    });
    document.body.innerHTML = output;
  });
}
