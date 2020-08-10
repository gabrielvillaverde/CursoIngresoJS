/*
EJERCICIO C: MIXING BANDERA

De una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente:

Raza
Peso
Temperatura media del lugar donde habita
Edad
Si está en peligro de extinción(si o no)

Se debe informar:

1. El promedio de edad total.
2. La raza del más pesado.
3. La temperatura máxima ingresada de los animales en extinción
*/


function mostrar() {

	/* Variables. */

	var respuesta = true;
	var razaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var estadoExtincion;
	var acumuladorEdad = 0;
	var contadorAnimales = 0;
	var flagMasPesado = false;
	var animalMasPesado;
	var razaMasPesado;
	var flagMaximaTemperatura = false;
	var maximaTemperatura;
	var contadorAnimalesEnExtincion = 0;	

	/* Loop del tipo do.while porque no conozco la cantidad de iteraciones. */

	do 
	{
		/* Validación de datos. */

		// Raza

		razaIngresada = prompt("Ingrese la raza del animal.");	

		// Peso
		pesoIngresado = prompt("Ingrese el peso del animal.");
		pesoIngresado = parseInt(pesoIngresado);
		while (isNaN(pesoIngresado) || pesoIngresado < 1) {
			pesoIngresado = prompt("Error. Debe ingresar un valor numérico mayor a 0 para el peso del animal.");
			pesoIngresado = parseInt(pesoIngresado);
		}

		// 2. INFORMAR: (SIN BANDERAS) La raza del más pesado.

		if(contadorAnimales == 0){
			razaMasPesado = razaIngresada;
			animalMasPesado = pesoIngresado;
		}
		else if(pesoIngresado > animalMasPesado){
			razaMasPesado = razaIngresada;
			animalMasPesado = pesoIngresado;
		}

		/* // 2. INFORMAR: (CON BANDERAS) La raza del más pesado.

		if(flagMasPesado == false){
			razaMasPesado = razaIngresada;
			animalMasPesado = pesoIngresado;
			flagMasPesado = true;
		}

		else if(pesoIngresado > razaMasPesado){
			razaMasPesado = razaIngresada;
			animalMasPesado = pesoIngresado;
		} */

		// Temperatura
		temperaturaIngresada = prompt("Ingrese la temperatura.");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while (isNaN(temperaturaIngresada) || temperaturaIngresada < 1){
			temperaturaIngresada = prompt("Error. Debe ingresar un valor numérico mayor a 0 para la temperatura.");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		// Edad:
		edadIngresada = prompt("Ingrese la edad.");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) || edadIngresada < 1) {
			edadIngresada = prompt("Error. Solo pueden ingresar valores numéricos mayores Ba 0 para la edad.");
			edadIngresada = parseInt(edadIngresada);
		}
		
		// Peligro de extinción:
		estadoExtincion = confirm("¿El animal está en peligro de extinción");

		/* 	// // 3. INFORMAR: (SIN BANDERAS) La temperatura máxima ingresada de los animales en extinción.
		if(estadoExtincion == true){
			if(contadorAnimalesEnExtincion == 0){
			maximaTemperatura = temperaturaIngresada;
			}
			else if(temperaturaIngresada > maximaTemperatura){
			maximaTemperatura = temperaturaIngresada;
			}
			contadorAnimalesEnExtincion++
		}*/
		
		// 3. INFORMAR: (CON BANDERAS) La temperatura máxima ingresada de los animales en extinción.

		if(estadoExtincion == true){
			if(flagMaximaTemperatura == false){
				maximaTemperatura = temperaturaIngresada;
				flagMaximaTemperatura = true;
			}
			else if(temperaturaIngresada > maximaTemperatura){
				maximaTemperatura = temperaturaIngresada;
			}
		} 

		// Se pregunta por confirm si quiere ingresar otro dato.
		respuesta = confirm("¿Quiere ingresar otro animal?");

		// 1. INFORMAR: El promedio de edad total.

		acumuladorEdad = acumuladorEdad + edadIngresada;
		contadorAnimales++;

	}

	while (respuesta == true);

	// 1. INFORMAR: El promedio de edad total.
	promedio = acumuladorEdad / contadorAnimales;
	console.log("El promedio de edad total de los animales es: " + promedio);

	// 2. INFORMAR: La raza del más pesado.
	console.log("La raza del animal más pesado es: " + razaMasPesado + " y su peso es de: " + animalMasPesado);

	// 3. INFORMAR: La temperatura máxima ingresada de los animales en extinción.
	console.log("La temperatura máxima ingresada de los animales en extinción es de: " + maximaTemperatura);
}
