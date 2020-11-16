async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // const response = await fetch('/api/users/login', {
        var userData = {
          email: email,
          password: password
        }
        $.ajax({
          

        method: 'post',
        url: '/api/users/login',
        data: userData
        
        // headers: { 'Content-Type': 'application/json' }
      })
      .then(response =>{
        // console.log(response)
        if (response.user.email===email) {
          
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
      })
  
      // if (response.ok) {
      //   console.log(response)
      //   // document.location.replace('/parts');
      //   console.log('you are in')
      // } else {
      //   // alert(response.statusText);
        
      //   // document.addEventListener('DOMContentLoaded', function() {
      //   //   var elems = document.querySelectorAll('.modal');
      //   //   var instances = M.Modal.init(elems);
      //   //   instances.open()
      //   // });
        
      //   $(document).ready(function(){
      //     $('#modal').modal();
      //     $('#modal').modal('open');
      //   });
      // }
    }
}
  
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);