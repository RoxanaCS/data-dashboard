# Data Dashboard

Definición del diseño e implementación de un data dashboard para las Training Managers de Laboratoria, que contemple los siguientes puntos:
 + El total de estudiantes presentes por sede y generación.
 + El porcentaje de deserción de estudiantes.
 + La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del   total de puntos.
 + El porcentaje que representa el dato anterior en relación al total de estudiantes.
 + El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula, en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria.
 + La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
 + La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
 + El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
 + La puntuación promedio de l@s profesores.
 + La puntuación promedio de l@s jedi masters.
 
## Considerar como cliente a Valentina, nuestra TM.
 Según sus requerimientos el data dashboard debe contemplar además:
 + Lo más importante son el ingreso y la deserción, las notas por sprint y separadas en técnico y HSE.
 + Considerar un selector de idiomas, sino se puede, implementar el data dashboard en inglés.
 + Mostrar los resultados de la autoevaluación por unidad de cada sprint.

## Generalidades del sitio
+ Elegir fuente para las letras (google font).
+ Linkear fuentes en el html.
+ Linkera css al html.
+ Imágenes disponibles en carpeta assets/images.
+ Darle formato al body para que no tenga márgenes y sea del ancho de la pantalla.
+ Linkera js al html.
+ Linkear css de estilo de iconos (http://fontawesome.io ) en el html.
+ Contemplar la herramienta de Google Charts para los gráficos (https://developers.google.com/chart/interactive/docs/quick_start).

## Header (Cabecera)

+ Crear menú lateral para el usuario en el extremo izquierdo, este menú debe ser dinámico y aparecer cuando se presione un icono.
+ Insertar logo de laboratoria en el centro.
+ Color de fondo blanco.

## Sección 1

+ Crear menú navegable donde se puede elegir que sede y generación ver en el data dashboard.
+ Crear div que contenga la sede y generación selecionada.
+ Crear un menú de 2 pestañas intercambiables para ver: Overview y Students.

## Dentro de la pestaña Overview:
## Sección 2

+ Crear gráfico de "enrolment" (inscripción) que muestre el número de alumnas inscritas, la deserción por sprint y total.
+ Crear gráfico de "Achievement" (logros) que muestre la cantidad de alumnas que lograron obtener el puntaje mínimo de aprobación por sprint y en total.

## Sección 3

+ Crear gráfico de habilidades técnicas que muestre la cantidad de alumnas que lograron obtener el puntaje mínimo de aprobación por sprint y en total.
+ Crear gráfico de HSE que muestre la cantidad de alumnas que lograron obtener el puntaje mínimo de aprobación por sprint y en total.

## Sección 4

+ Crear diagrama que muestre los porcentajes obtenidos por cada item de la autoevaluación de laboratoria por unidad de cada sprint.

## Sección 5

+ Crear gráfico de la satisfacción de las estudiantes por sprint y total.
+ Crear gráfico del Net Promoter Score (NPS) promedio de los sprints cursados y en total.

## Sección 6

+ Crear gráfico de la puntuación de los profesores por sprint y total.
+ Crear gráfico de la puntuación de los Jedis por sprint y en total.

## Dentro de la pestaña Students:

+ Crear cuadro de la especialización.
+ Crear cuadro del perfil de las alumnas.

