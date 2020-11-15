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
        document.location.replace('/parts');
        console.log('you are in')
      } else {
        // alert(response.statusText);
        
        // document.addEventListener('DOMContentLoaded', function() {
        //   var elems = document.querySelectorAll('.modal');
        //   var instances = M.Modal.init(elems);
        //   instances.open()
        // });
        
        $(document).ready(function(){
          $('#modal').modal();
          $('#modal').modal('open');
        });
      }
    }
}
  
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);