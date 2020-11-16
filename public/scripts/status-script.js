//============================================
// Display Status Options for Product Dropdown
//============================================

let prodQuantity = 

$('#completed').on('click', function () {
   console.log(prodQuantity)
   $.ajax({
      method: "PUT",
      url: '/overview',
      data: prodQuantity
   })
      .then(data => {
         console.log(prodQuantity);
         //if no data is deleted
         if (!data) {
            console.log(data);
         }
      })
})