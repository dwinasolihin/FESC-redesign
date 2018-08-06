//chart-script.js
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.arrayToDataTable([
          ['Year', 'Renewable Energy Production', 'Total Electricity Consumption'],
          ['1960', 35680, 57344],
          ['1965', 34417, 62705],
          ['1970', 35826, 71216],
          ['1975', 38613, 78258],
          ['1980', 39016, 87016],
          ['1985', 39916, 95878],
          ['1990', 42760, 108610],
          ['1995', 44550, 119314],
          ['2000', 49550, 135509],
          ['2005', 49550, 135509],
          ['2010', 49550, 135509],
          ['2015', 51489, 153032]
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