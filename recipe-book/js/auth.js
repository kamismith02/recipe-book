const users = JSON.parse(localStorage.getItem('users')) || [];

function register(username, password) {
  if (users.some(user => user.username === username)) {
    alert('Username already exists. Please choose a different username.');
    return;
  }
  
  const user = { username, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  alert('User registered successfully!');
}

function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert('Login successful!');
    return true;
  } else {
    alert('Login failed. Please check your username and password.');
    return false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;
      register(username, password);
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      login(username, password);
    });
  }
});
