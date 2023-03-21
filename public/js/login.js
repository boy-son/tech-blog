const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });


      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
      const data = await response.json();
      console.log(data);
    }
  };
  
  document.querySelector('#login').addEventListener('submit', loginFormHandler);