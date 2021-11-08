async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
  
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
        document.location.replace('/taskView/');
      } else {
        alert(response.statusText);
      }
    }
  }
  // eventually sign up
  
  document.querySelector('.submitBtn').addEventListener('login', loginFormHandler);
  
