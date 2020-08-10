/*
EJERCICIO B: SIN BANDERAS
Se debe ingresar 10 veces:

•	Nombre
•	Edad (0 y 115)
•	Altura (30 y 230)
•	Sexo
•	Dinero (puede ser positivo o negativo, pero debe ser un número)
•	Cantidad de hijos (0 y 10)

Después de validar, informar:

1.	Nombre de la persona con edad más vieja.
2.	Promedio de altura de las mujeres.
3.	Nombre de la mujer más joven.

*/

function mostrar() 
{

  /* Declaración de variables. */

  var contador = 0;
  var nombreIngresado;
  var edadIngresada;
  var sexoIngresado;
  var alturaIngresada;
  var dineroIngresado;
  var contadorCantidadPersonas = 0;
  var nombrePersonaMasVieja;
  var edadPersonaMasVieja;
  var contadorCantidadMujeres = 0;
  var acumuladorAlturaMujeres = 0;
  var promedio;

  /* Bucle FOR porque sé la cantidad de iteraciones. */

  for (contador = 0; contador < 10; contador++) {

    /* Solicitud y validación de datos. */

    // Nombre:
    nombreIngresado = prompt("Ingrese su nombre.");

    // Edad:
    edadIngresada = prompt("Ingrese su edad.");
    edadIngresada = parseInt(edadIngresada);
    while (isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 115) {
      edadIngresada = prompt("Error. Solo pueden ingresar un valor numérico entre 1 y 115.");
      edadIngresada = parseInt(edadIngresada);
    }

    // 1.	Nombre de la persona con edad más vieja.

    if(contadorCantidadPersonas == 0){ // Se puede hacer también: contador == 0.
      nombrePersonaMasVieja = nombreIngresado;
      edadPersonaMasVieja = edadIngresada;
    }
    else if(edadIngresada > edadPersonaMasVieja){
      nombrePersonaMasVieja = nombreIngresado;
      edadPersonaMasVieja = edadIngresada;
    }

    // Altura:
    alturaIngresada = prompt("Ingrese su altura.");
    alturaIngresada = parseInt(alturaIngresada);
    while (isNaN(alturaIngresada) || alturaIngresada < 30 || alturaIngresada > 230) {
      alturaIngresada = prompt("Error. Solo pueden ingresar valores numéricos entre 30 y 230 para su altura.");
      alturaIngresada = parseInt(alturaIngresada);
    }

    // Sexo:
    sexoIngresado = prompt("Ingrese su sexo: F o M");
    sexoIngresado = sexoIngresado.toUpperCase();
    while (sexoIngresado != "F" && sexoIngresado != "M") {
      sexoIngresado = prompt("Error. Ingrese un género correcto: F o M.");
      sexoIngresado = sexoIngresado.toUpperCase();	
    }

    // 2.	Promedio de altura de las mujeres.
    // 3.	Nombre de la mujer más joven.

    if(sexoIngresado == "F"){
      if(contadorCantidadMujeres == 0){
        nombreMujerMasJoven = nombreIngresado;
        edadMujerMasJoven = edadIngresada;
      }
      else if(edadIngresada < edadMujerMasJoven){
        nombreMujerMasJoven = nombreIngresado;
        edadMujerMasJoven = edadIngresada;
      }
      contadorCantidadMujeres++;
      acumuladorAlturaMujeres = acumuladorAlturaMujeres + alturaIngresada;      
    }

    // Dinero:
    dineroIngresado = prompt("Ingrese su dinero:");
    dineroIngresado = parseFloat(dineroIngresado);
    while(isNaN(dineroIngresado)){
      dineroIngresado = prompt("Error. Debe ingresar un valor numérico, sea positivo o negativo.");
      dineroIngresado = parseFloat(dineroIngresado);
    }

    // Cantidad de hijos:
    cantidadDeHijosIngresados = prompt("Ingrese la cantidad de hijos que tiene:");
    cantidadDeHijosIngresados = parseInt(cantidadDeHijosIngresados);
    while(isNaN(cantidadDeHijosIngresados) || cantidadDeHijosIngresados < 0 || cantidadDeHijosIngresados > 10){
      cantidadDeHijosIngresados = prompt("Error. Debe ingresar una cantidad de hijos entre 0 y 10");
      cantidadDeHijosIngresados = parseInt(cantidadDeHijosIngresados);
    }

    contadorCantidadPersonas++; // Lo ingreso acá para que aumente de acuerdo a la cantidad de iteraciones, es decir, de personas que se ingresan.

  }

  // 1.	Nombre de la persona con edad más vieja. 

  console.log("El nombre de la persona con edad más vieja es: " + nombrePersonaMasVieja);

  // 2.	Promedio de altura de las mujeres.
  // 3.	Nombre de la mujer más joven.
  
  if(contadorCantidadMujeres > 0){
    promedio = acumuladorAlturaMujeres / contadorCantidadMujeres;
    console.log("El promedio de altura de las mujeres es: " + promedio);
    console.log("El nombre de la mujer más joven es: " + nombreMujerMasJoven + " con una edad de: " + edadMujerMasJoven);
  }
  else{
    console.log("No se ingresaron mujeres.");
  } 
}
