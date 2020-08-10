/*
En el ingreso a un viaje en avión nos solicitan: nombre, edad, sexo (F o M), estado civil ("Soltero", "Casado" o "Viudo") y temperatura corporal.

Mostrar:
A) El nombre de la persona con mas temperatura.
B) Cuántos mayores de edad están viudos
C) La cantidad de hombres que hay solteros o viudos.
D) Cuántas personas de la tercera edad (más de 60 años), tienen más de 38 de temperatura.
E) El promedio de edad entre los hombres solteros.
*/


function mostrar() {
	/* Declaración de variables. */

	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var eCivilIngresado;
	var temperaturaIngresada;
	var respuesta = true;
	var flag = false;
	var temperaturaMasAlta;
	var contadorMayoresViudo = 0;
	var contadorHombresViudos = 0;
	var contadorHombresSolteros = 0;
	var contadorViejosConTemperatura = 0;
	var acumuladorEdadHombresSolteros = 0;
	var promedioEdadHombresSolteros;
	var sumaSolterosViduos;

	/* Desconozco la cantidad de iteraciones, por lo tanto hago un do while. */

	do {

		// Solicito el nombre:
		nombreIngresado = prompt("Ingrese su nombre.");

		// Solicito la edad:
		edadIngresada = prompt("Ingrese su edad.");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) || edadIngresada < 15) {
			edadIngresada = prompt("Error. Solo pueden ingresar datos de pasajeros mayores a 15 años.");
			edadIngresada = parseInt(edadIngresada);
		}

		/* Validación de datos. */

		// Solicito y valido el sexo:

		sexoIngresado = prompt("Ingrese su sexo: F o M");
		sexoIngresado = sexoIngresado.toUpperCase();
		while (sexoIngresado != "F" && sexoIngresado != "M") {
			sexoIngresado = prompt("Error. Ingrese un género correcto: F o M.");
			sexoIngresado = sexoIngresado.toUpperCase();
		}

		// Solicito y valido el estado civil:

		eCivilIngresado = prompt("Ingrese su estado civil: soltero, casado o viudo.");
		while (eCivilIngresado != "Soltero" && eCivilIngresado != "Casado" && eCivilIngresado != "Viudo") {
			eCivilIngresado = prompt("Error. Debe ingresar uno de los siguientes estados civiles: soltero, casado o viudo.")
		}

		// Solicito la temperatura corporal:
		temperaturaIngresada = prompt("Ingrese su temperatura corporal.");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while (isNaN(temperaturaIngresada)) {
			temperaturaIngresada = prompt("Error. Ingrese valores numéricos para su temperatura corporal.");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		// A) El nombre de la persona con mas temperatura.

		if (flag == false) { // 
			nombreConMasTemperatura = nombreIngresado;
			temperaturaMasAlta = temperaturaIngresada; // 
			flag = true; // ...
		}

		else if (temperaturaIngresada > temperaturaMasAlta) { //... 
			nombreConMasTemperatura = nombreIngresado;
			temperaturaMasAlta = temperaturaIngresada; //... 
		}

		// B) Cuántos mayores de edad están viudos
		// C) La cantidad de hombres que hay solteros o viudos.
		// E) El promedio de edad entre los hombres solteros.

		switch (eCivilIngresado) { // Switch para cada caso del estado civil ingresado.
			case "Soltero": // En el caso de que el pasajero sea soltero...
				if(sexoIngresado == "M") { // Si es masculino..
					contadorHombresSolteros++; // ...se agrega un contador para la cantidad de hombres solteros, se suma de 1 en 1.
					acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edadIngresada; 
				}
				break;
			case "Viudo":
				if(sexoIngresado == "M") {
				contadorHombresViudos++;
				}
				if (edadIngresada > 17) {
					contadorMayoresViudo++;
				}
				break;
		}

		// D) Cuántas personas de la tercera edad (más de 60 años), tienen más de 38 de temperatura.

		if(edadIngresada > 59 && temperaturaIngresada > 37){
			contadorViejosConTemperatura++;
		}

		respuesta = confirm("¿Quiere ingresar otro pasajero?");


	} while (respuesta == true);

	// E) El promedio de edad entre los hombres solteros.

	promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;

	sumaSolterosViduos = contadorHombresSolteros + contadorHombresViudos;

	console.log("La persona con más temperatura es: " + nombreConMasTemperatura + " con una temperatura corporal de: " + temperaturaMasAlta + "°C");
	console.log("Los mayores de edad que están viudos son: " + contadorMayoresViudo);
	console.log("La cantidad de hombres solteros es de: " + contadorHombresSolteros + " y la cantidad de hombres viudos es de: " + contadorHombresViudos + ". La suma total de ambos es de: " + sumaSolterosViduos);
	console.log("La cantidad de personas de la tercera edad con más de 38°C de temperatura son: " + contadorViejosConTemperatura);
	console.log("El promedio de edad de los hombres solteros es de: " + promedioEdadHombresSolteros + " años.");

}
