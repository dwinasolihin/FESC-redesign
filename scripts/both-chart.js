//consumption & production column chart
google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChartBar);

      function drawChartBar() {
        var data = new google.visualization.arrayToDataTable([
          ['Year', 'Renewable Energy Production', 'Total Electricity Consumption'],
          ['1960', 35680, 57344],
          ['1965', 34417, 95878],
          ['1970', 35826, 171346],
          ['1975', 38613, 242096],
          ['1980', 39016, 309694],
          ['1985', 39916, 379307],
          ['1990', 42760, 489741],
          ['1995', 44550, 571483],
          ['2000', 49550, 668216],
          ['2005', 49550, 767622],
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