
//hacer que el menu cambie cada vez que es seleccionado
var mostrarOcultar = function(e){
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var overview = document.getElementById("overview");
  var students = document.getElementById("students");
  if(tabSeleccionado==="tabOverview"){
    console.log("overview");
    //ocultar los demas menus
    students.style.display="none";
    //tengo que mejorar el borde del boton /students.style.border= "0.1em solid #F7B617";
    //mostrar overview
    overview.style.display="block";
  }else if(tabSeleccionado==="tabStudents"){
    console.log("students");
    //ocultar los demas menus
    overview.style.display="none";
    //mostrar estudiantes
    students.style.display="block";
  }
}
var cargarPagina = function(){
  var elementosTab = document.getElementsByClassName("tab");
  for(var i = 0; i < elementosTab.length; i++){
    elementosTab[i].addEventListener("click",mostrarOcultar);
  }
}
cargarPagina();
//grafico de las habilidades tecnicas
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Aprobacion', 'n° alumnas'],
          ['Work',     11],
          ['Eat',      2],
        ]);

        var options = {
          colors: ['#F9A91A', '#808080']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
      //grafico de las HSE
      google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart2);

            function drawChart2() {

              var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work',     11],
                ['Eat',      2],
              ]);

              var options = {
                colors: ['#F9A91A', '#808080']

              };

              var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

              chart.draw(data, options);
            }



// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
