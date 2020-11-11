$(document).ready(function () {
      // $('form').material_select();
  
      // for HTML5 "required" attribute
      $("select[required]").css({
        display: "inline",
        height: 0,
        padding: 0,
        width: 0
      });


   $('textarea#description, input#part_name, input#part_number').characterCounter();
   $('.modal').modal();

   //=================================
   //Active product color change
   //=================================
   $(".product").on("click", function () {
      $('.product').css("color", "black");
      $(this).css("color", "blue");
   });
   //=====================================
   //Allow Edit on part row
   //=====================================
   $(".fa-edit").on('click', function () {
      //$('.fa-edit').prop("disabled", true);
      if ($(this).parent().siblings('.desc').children().length < 1) {
         let descField = $(this).parent().siblings('.desc');
         let quantityField = $(this).parent().siblings('.quantity');
         let descTextArea = $(`<textarea id='descText' class='materialize-textarea' data-length="30"></textarea>`);
         let quantityInput = $("<input type = \"number\" min = 0 max = 9999999>");
         //add edit option for description field
         descTextArea.val(descField.text());//using .html() retains special character encoding
         descTextArea.addClass("descText");
         descField.empty();
         descField.append(descTextArea);
         $('textarea#descText').characterCounter();
         //add edit option for quantity field
         quantityInput.val(quantityField.text());
         quantityInput.addClass('quantityNumber');
         quantityField.empty();
         quantityField.append(quantityInput);
      }


   });
   //===========================================
   //disable edit upon save and update database
   //===========================================
   $(".fa-save").on('click', function () {
      if ($(this).parent().siblings('.desc').children().length > 0) {
        

         let descField = $(this).parent().siblings('.desc');
         let quantityField = $(this).parent().siblings('.quantity');
         let description = $(this).parent().siblings('.desc').children('.descText').val();//updated description
         let quantity = $(this).parent().siblings('.quantity').children('.quantityNumber').val();//updated quantity
         let id = $(this).parent().siblings('.part-number').children('#id').val();//updated quantity
         console.log(id);
         console.log("meat");
         //update descField

         //update quantityField
         var partInfo = {
            description: description,
            quantity: quantity,
            part_number: $(this).parent().siblings('.part-number').text()
         }
         //  start loader
         // var loaderInstance = M.modal.getInstance($('#load-modal'))
         // loaderInstance.open();
         //update database
         $.ajax({
            method: "PUT",
            url: `/parts`,
            data: partInfo

         })
            .then(data => {
               // loaderInstance.close();
               console.log(data);
               descField.empty();
               descField.html(description);
               quantityField.empty();
               quantityField.html(quantity);
               // $('.modal').modal();
               //location.reload();
            })
      }

   })
   //=========================================
   //delete row item on parts table
   //=========================================
   $(".fa-trash-alt").on('click', function () {
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
         .then(data => {
            if (!data) {
               console.log(data);
            }
            // location.reload();
            $(".parts-table").find("input,button,textarea,select").attr("disabled", "enabled");
            $(this).parents('tr').remove();
         })

   })
   // $('#part-form').validate({

   // })
   //    console.log("I'm in")
   //    if ($('#part_number').valid()){
   //       $('#part-form-sumbit').prop('disabled', false);
   //    } else {
   //       $('#part-form-submit').prop('disabled', 'disabled');
   //   }
   // }) 

   //===================================================
   // Create new part on submit of form
   //===================================================
   // $(".submit-btn").on('click', function (event) {
   $("#part-form").on('submit', function (event) {
      // event.preventDefault();
         
            console.log("I'm in")
         
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
            .then(data => {
               if (data.err === "Duplicate Entry") {
                  console.log('Wrong part data')
                  //modal goes here

               }
               else {
                  location.reload();
               }
            })
   })

})