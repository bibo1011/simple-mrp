$(document).ready(function () {
  $('#modal').modal();
  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
        var userData = {
          email: email,
          password: password
        }
        $.ajax({
        method: 'post',
        url: '/api/users/login',
        data: userData
        
      })
          .then(response => {
            console.log(response);
        if (response.user.email===email) {
          
          document.location.replace('/overview');
        } else {          
            
            $('#modal').modal('open');
        }
      })
    }
}
  
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

});