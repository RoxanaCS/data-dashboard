//función para el menú desplegable lateral
function mostrar() {
    document.getElementById("sidebar").style.display = "inline";
    document.getElementById("sidebar").style.width = "12em";
    document.getElementById("contenido").style.marginLeft = "12em";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}
//menu de sedes y generaciones
var list =document.getElementById('list');
list.addEventListener('click', function(){
    var texto = list.firstChild.innerHTML;
    var sede = document.getElementById('sede');
    document.getElementById('parrafo').innerHTML = 'SANTIAGO DE CHILE ' + texto;

  /*var menu2 = document.getElementsByClassName('menu_oculto');
  menu2[0].classList.toggle('menu');
  var contenedor = document.getElementsByClassName('contenedor');
  contenedor[0].classList.toggle('contendor2');*/
})

//hacer que el menu de pestañas cambie cada vez que es seleccionado
var mostrarOcultar = function(e){
    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    var elementosTab = document.getElementsByClassName("tab");
    var overview = document.getElementById("overview");
    var students = document.getElementById("students");
    if(tabSeleccionado==="tabOverview"){
      console.log("overview");
    //ocultar los demas menus
      students.style.display="none";
      elementosTab[0].style.borderBottom = "0.2em solid #F9A91A";
      elementosTab[1].style.borderBottom = "none";
    //tengo que mejorar el borde del boton /students.style.border= "0.1em solid #F7B617";
    //mostrar overview
      overview.style.display="block";
    }else if(tabSeleccionado==="tabStudents"){
      console.log("students");
      //ocultar los demas menus
      overview.style.display="none";
      //mostrar estudiantes
      students.style.display="inline-block";
      elementosTab[1].style.borderBottom = "0.2em solid #F9A91A";
      elementosTab[0].style.borderBottom = "none";
    }
}
var cargarPagina = function(){
    var elementosTab = document.getElementsByClassName("tab");
    for(var i = 0; i < elementosTab.length; i++){
      elementosTab[i].addEventListener("click",mostrarOcultar);
    }
}
cargarPagina();


/*seccion2*/
//grafico Columnas Enrollments
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuffEnrolmment);


      function drawStuffEnrolmment() {
        var data = new google.visualization.arrayToDataTable([
          ['Sprint', 'Units'],
          ['S 1', 135],
          ['S 2', 120],
          ['S 3', 119],
          ['S 4', 108],
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
          ["Sprint", 'Units'],
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
      data.addColumn('number', 'Satisfaction');

      data.addRows([
         [0, 0],    [1, 86],   [2, 92],  [3, 83],  [4, 90],

      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Satisfaction'
        },
        colors: ['#F9A91A', '#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_student'));
      chart.draw(data, options);
    }
//grafico teacher
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesTeacher);

function drawTrendlinesTeacher() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'score');

      data.addRows([
          [0, 0],    [1, 4.6],   [2, 3.2],  [3, 4.4],  [4, 4.8],

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
      data.addColumn('number', '%NPS');

      data.addRows([
        [0, 0],    [1, 78],   [2, 63],  [3, 95],  [4, 87],

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
//graf_jedi
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlinesJedi);
function drawTrendlinesJedi() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'score Jedi');

      data.addRows([
          [0, 0],    [1, 4.5],   [2, 4.0],  [3, 4.8],  [4, 3.9],

      ]);

      var options = {
        hAxis: {
          title: 'Sprint'
        },
        vAxis: {
          title: 'Jedi Rating'
        },
        colors: ['#F9A91A'],
        trendlines: {
          1: {type: 'linear', color: '#111', opacity: .3}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('graf_jedi'));
      chart.draw(data, options);
    }
