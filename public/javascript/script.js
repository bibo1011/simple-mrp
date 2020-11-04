$(document).ready(function () {
    $('window').click(function () {
       $('input').attr('disabled', 'disabled');
    });
    $('#btn2').click(function () {
       $('input').removeAttr('disabled');
    });
 });