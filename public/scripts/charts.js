// Variable declarations for completed projects vs. projects in progress
var completed = 0;
var inProgress = 0;

// Chart variable and styling
  var options = {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];


// RESTful API request to map through products and update product status
$.ajax({
    method: "GET",
    url: '/api/overview'
})
.then(data => {
    data.products.forEach(product => {
        if (product.isCompleted) {
            completed++;
        } else {
            inProgress++;
        }
    });
    console.log(data);
    //if no data is deleted
    if (!data) {
        console.log(data);
    }
    return data
})
.then(result => {
    // Variable to auto-update products chart
    var data = {
        labels: ['Products Completed', 'Products in Progress'],
        series: [completed, inProgress]
    };

    // Create chart
    new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
});

// Trigger dropdown menu to confirm product status (completed vs. in progress)
$('.dropdown-trigger').dropdown();