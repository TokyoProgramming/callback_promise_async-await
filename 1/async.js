// Async Await

async function init() {
  createPost({ title: 'Post four', body: 'this is the four post' });

  getPosts();
}

// Async Await Fetch

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
}

fetchUsers();
