//part variables


//Active product color change
$(".product").on("click", function () {
   $('.product').css("color", "black");
   $(this).css("color", "blue");
});

//Allow Edit on part
$(".fa-edit").on('click', function () {
   if ($('.desc').children().length<1){
      let descField = $(this).parent().siblings('.desc');
      let quantityField = $(this).parent().siblings('.quantity');
      let descTextArea = $("<textarea></textarea>");
      let quantityInput = $("<input type = \"number\" min = 0 max = 9999999>");
      //add edit option for description field
      descTextArea.val(descField.text());//using .html() retains special character encoding
      descTextArea.addClass("descText");
      descField.empty();
      descField.append(descTextArea);
      //add edit option for quantity field
      quantityInput.val(quantityField.text());
      quantityInput.addClass('quantityNumber');
      quantityField.empty();
      quantityField.append(quantityInput);
   }
  

});
//disable edit upon save
$(".fa-save").on('click', function () {
   if ($('.desc').children().length>0){
      let descField = $(this).parent().siblings('.desc');
      let quantityField = $(this).parent().siblings('.quantity');
      let description = $(this).parent().siblings('.desc').children('.descText').val();//updated description
      let quantity = $(this).parent().siblings('.quantity').children('.quantityNumber').val();//updated quantity
      let id = $(this).parent().siblings('.part-number').children('#id').val();//updated quantity
      console.log(id);
      console.log("meat");
      //update descField
      descField.empty();
      descField.html(description);
      //update quantityField
      var partInfo ={
         description: description,
         quantity: quantity,
         id: parseInt(id)
      }
      quantityField.empty();
      quantityField.html(quantity);
      //update database
      $.ajax({
         method: "PUT",
         url: `/parts`,
         data: partInfo
         
      })
      .then(data=>{
         //location.reload();
      })
   }

})

//delete
$(".fa-trash-alt").on('click',function(){
   $(this).parents('tr').remove();
})

