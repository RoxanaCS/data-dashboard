
/*seccion2*/
//grafico Columnas Enrollments
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuffEnrolmment);


      function drawStuffEnrolmment() {
        var data = new google.visualization.arrayToDataTable([
          ['S 0', 'Units'],
          ['S 1', 44],
          ['S 2', 31],
          ['S 3', 12],
          ['S 4', 10],
        ]);

        var options = {
          colors:['#f9a91a'],
          legend: { position: 'none' },
          chart: {
           },
          axes: {

          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('graf_enrolmment'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
//Grafico Columnas Achievement
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuffAachievement);

      function drawStuffAachievement() {
        var data = new google.visualization.arrayToDataTable([
          ["S 0", 'Units'],
          ["S 1", 119],
          ["S 2", 74],
          ["S 3", 90],
          ["S 4", 85]
         
        ]);

        var options = {
          colors:['#f9a91a'],
          legend: { position: 'none' },
          chart: {
            },
          axes: {
          
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('graf_achievement'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

/*seccion5*/
// grafico satisfacción del estudiante
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
         [0, 0],    [1, 10],   [2, 23],  [3, 16],  [4, 17],
     
      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Satidfaction'
        },
        colors: ['#F9A91A', '#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_student'));
      chart.draw(data, options);
    }
//grafico 
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesTeacher);

function drawTrendlinesTeacher() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
          [0, 0],    [1, 10],   [2, 23],  [3, 16],  [4, 17],
     
      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Teacher Rating'
        },
        colors: ['#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_teacher'));
      chart.draw(data, options);
    }
//grafico de nps
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesNet);

function drawTrendlinesNet() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows([
        [0, 0],    [1, 10],   [2, 23],  [3, 16],  [4, 17],
     
      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Nps'
        },
        colors: ['#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_net'));
      chart.draw(data, options);
    }
