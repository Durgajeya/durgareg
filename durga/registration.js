document.getElementById('registrationForm').addEventListener('submit', function (event) {
  if (!this.checkValidity()) {
    console.log("hitted error")
    event.preventDefault();
    event.stopPropagation();
  }
  else {
    const regUsername = document.getElementById('email').value;
    const regPassword = document.getElementById('password').value;
    if (localStorage.getItem(regUsername)) {
      alert('Username already taken. Please choose another one.');
      return;
    }
    localStorage.setItem(regUsername, regPassword);
  }
  this.classList.add('was-validated');

});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  else {
     
    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const getRegPassword = localStorage.getItem(username)  ;

    if (getRegPassword && getRegPassword === password) {
      // Authentication successful
      alert('Login successful! Redirecting to the dashboard...');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  this.classList.add('was-validated');
});

// password
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
});

// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const regUsername = document.getElementById('regUsername').value;
//   const regPassword = document.getElementById('regPassword').value;

//   // Check if the username is already taken (you should perform this check on the server-side)
// if (localStorage.getItem(regUsername)) {
//   alert('Username already taken. Please choose another one.');
//   return;
// }

//   // Store the user data in localStorage (not secure for production)
// localStorage.setItem(regUsername, regPassword);

//   alert('Registration successful! You can now log in.');

//   // Clear the registration form
//   this.reset();
// });