$(document).ready(function () {
    var partName;
    var quantity;
    $.ajax({
    method: "get",
    url: "/api/parts"
})
    .then(partsData => {
         partName = partsData.map(part => {
            return part.part_name;
        })
        quantity = partsData.map(part => {
            return part.quantity;
        })
        console.log(partName);
        console.log(quantity);

        var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
        type: 'bar',
    data: {
        labels: partName,
        datasets: [{
        label: 'Quantity available',
            data: quantity,
            backgroundColor:
                'rgba(4, 6, 10, 0.2)',
                
            borderColor:
                'rgba(4, 5, 10, 1)',
                
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero: true
                }
            }]
        }
    }
});
    });

    

})

    

