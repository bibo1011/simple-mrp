$(document).ready(function(){
    $('.modal').modal();




    $('#update').on('click', function(event) {
        event.preventDefault();
        console.log('its working button')
        // if (password){
        //     var userPW = {
        //         password: password
        //     }
        //     $.ajax({
        //         method: 'put',
        //         url: '/users',
        //         data: password
        //     })
        //     .then(pw => {
        //         console.log(password)
        //     })
        // }
    })
});
// async function updatePW(event){
//     event.preventDefault();
//     document.querySelector('#Password').val().trim();
//     console.log('its working button')
// }
// document.querySelector('#account').addEventListener('submit', updatePW);

