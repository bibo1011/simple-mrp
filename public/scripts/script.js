//part variables


//Active product color change
$(".product").on("click", function () {
   $('.product').css("color", "black");
   $(this).css("color", "blue");
});

//Allow Edit on part
   $(".fa-edit").on('click', function () {
      //$('.fa-edit').prop("disabled", true);
      if ($(this).parent().siblings('.desc').children().length<1){
         let descField = $(this).parent().siblings('.desc');
         let quantityField = $(this).parent().siblings('.quantity');
         let descTextArea = $(`<textarea id='descText' maxlength="30"></textarea>`);
         let quantityInput = $("<input type = \"number\" min = 0 max = 9999999>");
         //add edit option for description field
         descTextArea.val(descField.text());//using .html() retains special character encoding
         descTextArea.addClass("descText");
         descField.empty();
         $('textarea#descText').characterCounter();
         descField.append(descTextArea);
         //add edit option for quantity field
         quantityInput.val(quantityField.text());
         quantityInput.addClass('quantityNumber');
         quantityField.empty();
         quantityField.append(quantityInput);
         // console.log("hey")
         // M.CharacterCounter.init($('textarea.descText'));
   }
  

});
//disable edit upon save
$(".fa-save").on('click', function () {
   if ($(this).parent().siblings('.desc').children().length>0){
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
         part_number: $(this).parent().siblings('.part-number').text()
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
         console.log (data)
         // $('.modal').modal();
         //location.reload();
      })
   }

})

//delete
$(".fa-trash-alt").on('click',function(){
   $(".parts-table").find("input,button,textarea,select").attr("disabled", "disabled");
   const partInfo = {
      part_number: $(this).parent().siblings('.part-number').text()
   }
   console.log(partInfo)
   $.ajax({
      method: "delete",
      url: '/parts',
      data: partInfo
   })
   .then(data=>{
      if(!data){
         console.log(data);
      }
      // location.reload();
      $(".parts-table").find("input,button,textarea,select").attr("disabled", "enabled");
      $(this).parents('tr').remove();
   })

})

$(".submit-btn").on('click',function(event){
   event.preventDefault();
   var partInfo = {
      part_name: $("#part_name").val(),
      part_number: $("#part_number").val(),
      description: $("#description").val(),
      quantity: parseInt($("#quantity").val())
   }
   console.log(partInfo);
   $.ajax({
      method: 'post',
      url: '/parts',
      data: partInfo
   })
   .then(data =>{
      if (data.err==="Duplicate Entry"){
         console.log('correct')
         //modal goes here
         
      }
      else{
         location.reload();
      }
   })
})
