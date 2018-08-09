//consumption & production column chart
//1.Google chart library loaded
//2.DOMContentLoaded
//3.get data from API
//4.Data received from API
//5.Draw chart





//4114afcc8b3e54887b3028765514ab5b
function onDOMLoad(){
    console.log("I am the first step, I should load google chart library") //1
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(getData);
}

document.addEventListener("DOMContentLoaded", onDOMLoad()) //2

function getData(){
    console.log("Getting data is the third step! ")

    let request = new XMLHttpRequest()
    let requestUrl = "http://api.eia.gov/series/?api_key=4114afcc8b3e54887b3028765514ab5b&series_id=SEDS.REPRB.FL.A" //3
    request.open('GET', requestUrl, true)

    request.onload = function(){

      if(request.status !== 200){
        console.log("Something went wrong: ", request)
        return
      }

      let responseVar = JSON.parse(request.response)

        //printing info from end of array
        console.log("first print", responseVar.series[0].data)
        let chartArray = responseVar.series[0].data
        chartArray.sort(sortFunction)
        function sortFunction(a, b){
            if (a[0] === b[0]){
                return 0;
            } else {
                return (a[0] < b[0]) ? -1: 1
            }
        }

        console.log ("second print", chartArray)

        //console.log(copyOfArray)
        drawChartBar(chartArray)
    }

    // Callback for when there's an error
    request.error = function(err){
        console.log("error is: ", err)
    }

    // Send the request to the specified URL
    request.send()

}


      function drawChartBar(freshData) {
        var data = new google.visualization.DataTable()
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Renewable Energy Production');
        data.addRows(freshData);


        var options = {
            title: 'Renewable Energy Production in Florida from 1960 to 2015',
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

