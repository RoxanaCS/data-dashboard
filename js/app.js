//hacer el menu desplegable para elegir cada sede y generación
var cargarGeneracion = function(){
  var elementosTab = document.getElementsByClassName("tab");
  for(var i = 0; i < elementosTab.length; i++){
    elementosTab[i].addEventListener("click",mostrarOcultar);
  }
}
cargarPagina();


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

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
