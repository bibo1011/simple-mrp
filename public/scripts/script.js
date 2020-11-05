
$(".product").on("click", function () {
   $('.product').css("color", "black");
   $(this).css("color", "blue");
});

$(".fa-edit").on('click', function () {
   var field = $(this).siblings('#desc');
   var textarea = $("<textarea></textarea>");

   textarea.val(field.val());
   field.replaceWith(textarea);

})

