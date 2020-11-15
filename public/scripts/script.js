$(document).ready(function () {
   M.AutoInit()
   // // Side Nav initialization
   // $('.sidenav').sidenav();
   // // $('.sidenav').sidenav('open');

   // // Tooltip initialization
   // $('.tooltipped').tooltip();

   // //collapsible Initialization
   // $('.collapsible').collapsible();


    $('textarea#description, input#part_name, input#part_number').characterCounter();

   // // Modal initialization
   // $('.modal').modal();


   //===============================
   // trigger menu
   //================================
   $('#sidenav-trigger').on('click', () => {
      $('.sidenav').sidenav('open');
   })
   //============================================================
   //Active product script (color change, display product info) 
   //============================================================
   $(".product").on("click", function () {
      //change color of selected product
      $('.product').removeClass('active');
      $(this).addClass('active')


   });
   //=====================================
   //Allow Edit on part row
   //=====================================
   $(".fa-edit").on('click', function () {
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
               $('#success-modal').modal({ dismissible: false });
               $('#success-modal').modal('open');
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
      $('#part-number').text(` ${partInfo.part_number}`);
      $('#confirm-modal').modal({ dismissible: false });
      $('#confirm-modal').modal('open');
      $('#yes').on('click', function () {
         console.log(partInfo)
         $.ajax({
            method: "delete",
            url: '/parts',
            data: partInfo
         })
            .then(data => {
               console.log(data);
               //if no data is deleted
               if (!data) {
                  console.log(data);
               }
               // location.reload();
               $('#success-modal').modal({ dismissible: false });
               $('#success-modal').modal('open');
               $(".parts-table").find("input,button,textarea,select").attr("disabled", "enabled");
               $(this).parents('tr').remove();
            })
      })

   })

   //===================================================
   // Create new part on submit of form
   //===================================================
   // $(".submit-btn").on('click', function (event) {
   $("#part-form").on('submit', function (event) {
      event.preventDefault();

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
            if (data.message === "Duplicate Entry") {
               // console.log('Wrong part data')
               //modal goes here
               $('#err-modal').modal('open', dismissible = false);

            }
            else {
               $('#success-modal').modal({ dismissible: false });
               $('#success-modal').modal('open');
               $('#success').on('click', function () {
                  location.reload();
               })
            }
         })
   })


//=====================================
// Display Product Info
//=====================================

//============================================
// Display Status Options for Product Dropdown
//============================================

   $(".dropdown-trigger").dropdown();
 

//============================================
// Display Status Options for Product Dropdown
//============================================
 $('#yes').on('click', function () {
   console.log(partInfo)
   $.ajax({
      method: "put",
      url: '/overview',
      data: partInfo
   })
      .then(data => {
         console.log(data);
         //if no data is deleted
         if (!data) {
            console.log(data);
         }
         // location.reload();
         $('#success-modal').modal({ dismissible: false });
         $('#success-modal').modal('open');
         $(".parts-table").find("input,button,textarea,select").attr("disabled", "enabled");
         $(this).parents('tr').remove();
      })
})
// Display product Info
//=====================================
var elem = $('select')
var instance = M.FormSelect.getInstance(elem);

$('.dropdown-content').on('click', function () {
   console.log("Hameed");
})
   
})

