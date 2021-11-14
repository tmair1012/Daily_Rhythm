 async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
  console.log(email, password);
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  // eventually sign up
  
  async function signupFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
   console.log("User",email,password,username)
    if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'post',
        body: JSON.stringify({
          email,
          password,
          username
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log("User created")
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }


  document.querySelector('.submitBtn')
  .addEventListener('click', loginFormHandler);

  document.querySelector('#signUpbtn')
  .addEventListener('click', signupFormHandler);
