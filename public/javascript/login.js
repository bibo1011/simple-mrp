// Hides sidebar with options when on the login page
if (window.location.hostname === 'https://localhost:3001/') {
  $('#sidebar').addClass('hide');
}


async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
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
        document.location.replace('/products');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);