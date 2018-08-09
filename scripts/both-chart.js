//Total Enery Consumption Chart
//----------------------------------------------------------------------------
//Steps to receive data from API
//1.Google chart library loaded
//2.DOMContentLoaded
//3.get data from API
//4.Data received from API
//5.Draw chart

//API key: 4114afcc8b3e54887b3028765514ab5b
//----------------------------------------------------------------------------

//Step 1: Load the google chart library
function onDOMLoad(){
    //console.log("I am the first step, I should load google chart library")
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(getDataConsumption);

}

//Step 2: DOMContentLoaded
document.addEventListener("DOMContentLoaded", onDOMLoad()) //2

function getDataConsumption(){
    //console.log("Getting data is the third step! ")

    //Step 3: Get the data from the API (request.open('GET', requestURL, true))
    let request = new XMLHttpRequest()
    let requestUrl = "https://api.eia.gov/series/?api_key=4114afcc8b3e54887b3028765514ab5b&series_id=SEDS.TETCB.FL.A"
    request.open('GET', requestUrl, true)

    request.onload = function(){

      if(request.status !== 200){
        console.log("Something went wrong: ", request)
        return
      }

      //Step 4: Receive the data from the API
      let responseVar = JSON.parse(request.response)

        //printing sorts the data from API from 1960 to 2016 instead of 2016 to 1960
        let chartArray = responseVar.series[0].data
        chartArray.sort(sortFunction)
        function sortFunction(a, b){
            if (a[0] === b[0]){
                return 0;
            } else {
                return (a[0] < b[0]) ? -1: 1
            }
        }

        //Step5: Draw the chart
        drawConsumptionBar(chartArray)
    }

    // Callback for when there's an error
    request.error = function(err){
        console.log("error is: ", err)
    }

    // Send the request to the specified URL
    request.send()

}

//Draws the chart - functionality taken from Google Charts
function drawConsumptionBar(freshData) {
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Total Energy Consumption');
    data.addRows(freshData);

    var options = {
        title: 'Total Energy Consumption in Florida from 1960 to 2015',
        chartArea: {width: '50%'},
       hAxis: {
            title: 'Year',
            minValue: 0
        },

        vAxis: {
            title: 'Billion Btu'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('consumption-chart'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

//----------------------------------------------------------------------------
/*
function getDataProduction(){
    //console.log("Getting data is the third step! ")

    //Step 3: Get the data from the API (request.open('GET', requestURL, true))
    let request = new XMLHttpRequest()
    let requestUrl = "https://api.eia.gov/series/?api_key=4114afcc8b3e54887b3028765514ab5b&series_id=SEDS.REPRB.FL.A"
    request.open('GET', requestUrl, true)

    request.onload = function(){

      if(request.status !== 200){
        console.log("Something went wrong: ", request)
        return
      }

      //Step 4: Receive the data from the API
      let responseVar = JSON.parse(request.response)

        //printing sorts the data from API from 1960 to 2016 instead of 2016 to 1960
        let chartArray = responseVar.series[0].data
        chartArray.sort(sortFunction)
        function sortFunction(a, b){
            if (a[0] === b[0]){
                return 0;
            } else {
                return (a[0] < b[0]) ? -1: 1
            }
        }

        //Step5: Draw the chart
        drawProductionBar(chartArray)
    }

    // Callback for when there's an error
    request.error = function(err){
        console.log("error is: ", err)
    }

    // Send the request to the specified URL
    request.send()

}

//Draws the chart - functionality taken from Google Charts
function drawProductionBar(freshData) {
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

    var chart = new google.charts.Bar(document.getElementById('production-chart'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
*/