/*
EJERCICIO A: BANDERA A FULL
De una cantidad de espectadores indeterminada debemos tomar los siguientes datos:

•	Sexo
•	Altura
•	Edad
•	Nombre

Se debe informar:

1.	El nombre de la más alta de las mujeres.
2.	El nombre del más viejo de los hombres.
3.	El nombre del primer adolescente ingresado, (solo mostrar si y solo si hay algún adolescente).

NOTA: Pedir datos por prompt y mostrar por console.log.
*/

function mostrar() {

	/* Variables. */

	var respuesta = true;
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var alturaIngresada;
	var flagMujerMasAlta = false;
	var nombreMujerMasAlta;
	var alturaMujerMasAlta;
	var flagHombresMasViejo = false;
	var nombreHombreMasViejo;
	var edadHombreMasViejo;
	var flagPrimerAdolescente = false;
	var nombrePrimerAdolescente;

	/* Loop del tipo do while. */
	do {

	/* Solicitud y validación de datos, según corresponda. */

	// Nombre:
	nombreIngresado = prompt("Ingrese su nombre.");	

	// Sexo:
	sexoIngresado = prompt("Ingrese su sexo: F o M");
	sexoIngresado = sexoIngresado.toUpperCase();
	while (sexoIngresado != "F" && sexoIngresado != "M") {
		sexoIngresado = prompt("Error. Ingrese un género correcto: F o M.");
		sexoIngresado = sexoIngresado.toUpperCase();	
	}

	// Altura:
	alturaIngresada = prompt("Ingrese su altura.");
	alturaIngresada = parseFloat(alturaIngresada);
	while (isNaN(alturaIngresada)) {
		alturaIngresada = prompt("Error. Solo pueden ingresar valores numéricos para su altura.");
		alturaIngresada = parseFloat(alturaIngresada);
	}

	// Edad:
	edadIngresada = prompt("Ingrese su edad.");
	edadIngresada = parseInt(edadIngresada);
	while (isNaN(edadIngresada)) {
		edadIngresada = prompt("Error. Solo pueden ingresar valores numéricos para su edad.");
		edadIngresada = parseInt(edadIngresada);
	}

	// Informar:
	// 1. El nombre de la más alta de las mujeres.

	if(sexoIngresado == "F"){
		if(flagMujerMasAlta == false){
		nombreMujerMasAlta = nombreIngresado;
		alturaMujerMasAlta = alturaIngresada;
		flagMujerMasAlta = true;
		}
		else if(alturaIngresada > alturaMujerMasAlta){
		nombreMujerMasAlta = nombreIngresado;
		alturaMujerMasAlta = alturaIngresada;
		}		
	}

	// 2. El nombre del más viejo de los hombres.

	if(sexoIngresado == "M"){
		if(flagHombresMasViejo == false){
			nombreHombreMasViejo = nombreIngresado;
			edadHombreMasViejo = edadIngresada;
			flagHombresMasViejo = true;
		}
		else if(edadIngresada > edadHombreMasViejo){
			nombreHombreMasViejo = nombreIngresado;
			edadHombreMasViejo = edadIngresada;
		}
	}

	// 3. El nombre del primer adolescente ingresado, (solo mostrar si y solo si hay algún adolescente).

	if(edadIngresada < 18 || edadIngresada > 12){
		if(flagPrimerAdolescente == false){
			nombrePrimerAdolescente = nombreIngresado;
			flagPrimerAdolescente = true;
		}
	}

	respuesta = confirm("¿Quiere ingresar otro pasajero?");		

	} while (respuesta == true);

	// 1. El nombre de la más alta de las mujeres.
	if(flagMujerMasAlta != true){
		console.log("No se cargaron datos de mujeres");
	}
	else
		console.log("El nombre de la mujer más alta es: " + nombreMujerMasAlta + " y su altura es: " + alturaMujerMasAlta);

	// 2. El nombre del más viejo de los hombres.
	if(flagHombresMasViejo != true){
		console.log("No se cargaron datos de hombres");
	}
	else
		console.log("El nombre del hombre más viejo es: " + nombreHombreMasViejo + " y su edad es: " + edadHombreMasViejo);
	
	// 3. El nombre del primer adolescente ingresado, (solo mostrar si y solo si hay algún adolescente).
	if(flagPrimerAdolescente == true){
		console.log("El nombre del primer adolescente es: " + nombrePrimerAdolescente);
	}	
}
