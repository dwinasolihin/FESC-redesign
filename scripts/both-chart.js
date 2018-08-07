//consumption & production column chart
function onDOMLoad (){
    console.log("I am the first step, I should load google chart library")
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(getData());
}
document.addEventListener("DOMContentLoaded", onDOMLoad())

function getData(){
    console.log("Getting data! (Step 3)")
    //Get data here
    drawChartBar();
}


      function drawChartBar() {
        var data = new google.visualization.arrayToDataTable([
          ['Year', 'Renewable Energy Production', 'Total Electricity Consumption'],
          ['2010', 49550, 788887],
          ['2015', 51489, 803865]
        ]);

        var options = {
            title: 'Renewable Energy Production vs. Total Electricity Consumption',
            chartArea: {width: '50%'},
            hAxis: {
              title: 'Year',
              minValue: 0
            },
            vAxis: {
              title: 'Billion Btu'
            }
          };

        var chart = new google.charts.Bar(document.getElementById('barchart-material-60s'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      //3.get data from API
      //5.draw chart

      //1.DOMContentLoaded
      //2.Google chart library loaded
      //4.Data received from API