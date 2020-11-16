$(document).ready(function () {
    M.AutoInit()

    $('#update').on('click', function(event) {
        event.preventDefault();
        console.log('its working button')
        var password = $("#password").val();
        console.log(password);
        if (password){
            var userPW = {
                password: password,
                id: $('#user_id').text()
            }
            $.ajax({
                method: 'put',
                url: '/users',
                data: userPW
            })
            .then(pw => {
                console.log(password)
                $('#modal1').modal('close');
                $('#success-modal').modal('open');
                $('#success').on('click', function () {
                    
                    location.reload();
                })

            })
        }
    }) 
});
// async function updatePW(event){
//     event.preventDefault();
//     document.querySelector('#Password').val().trim();
//     console.log('its working button')
// }
// document.querySelector('#account').addEventListener('submit', updatePW);

