// Retrieve the DOM element where the blog posts will be displayed
const postContainer = document.getElementById('posts');

// Make a GET request to retrieve all blog posts from the server
fetch('/blogPost')
  .then(response => response.json())
  .then(posts => {
    // For each blog post, create a new DOM element to display the post
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <small>Author: ${post.user}</small>
      `;
      postContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error(error));