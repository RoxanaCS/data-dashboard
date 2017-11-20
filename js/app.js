//función para el menú desplegable lateral
/*function mostrar() {
    document.getElementById("sidebar").style.width = "20em";
    document.getElementById("contenido").style.marginLeft = "20em";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}*/
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

//hacer que el menu cambie cada vez que es seleccionado
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
      students.style.display="block";
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
//grafico de las habilidades tecnicas




// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
