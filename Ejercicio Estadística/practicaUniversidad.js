/* Consigna: 
Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.
1.	El alumno deberá ingresar:
      o	Nombre del alumno
      o	Carrera (Programación, Psicología, Diseño gráfico)
      o	Estado de la carrera: en curso-abandono-finalizado
      o	Sexo (femenino-masculino-nobinario)
      o	Edad (18 o más)
      o	Nota (entre 1 y 10) 

2.	Se desconoce la cantidad de alumnos que se ingresaran.
3.	Se deberán validar los casos resaltados en negrita (entre paréntesis).
4.	El programa deberá informar a través del documento html:
        A.	Cantidad total de alumnos de cada carrera.
        B.	Cantidad total de mujeres que cursan la carrera de programación.
        C.	Cantidad de alumnos no binarios.
        D.	Promedio de notas de los alumnos finalizantes.
        E.	Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
        F.	Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.
        G.	¿Cuál es la carrera que tiene más alumnos?
*/

function probarEjercicio() {
	/* Declaración de variables */

	var nombre;
	var carrera;
	var estadoCarrera;
	var edad;
	var sexo;
	var nota;
	var respuesta;
	respuesta = true;
	var alumnos = 0;
	contador = 0;
	var contadorProgramacion = 0;
	var contadorDiseñoGrafico = 0;
	var contadorPsicologia = 0;
	var contadorMujerProgramacion = 0;
	var contadorNoBinarios = 0;
	var contadorNotas = 0;
	var contadorAlumnosFinalizados = 0;
	var promedioNotasAlumnosFinalizados;
	var nombreAlumnoMasViejo;
	var sexoAlumnoMasViejo;
	var edadAlumnoMasViejo;
	var flagMasViejo = 0;
	var flagMejorAlumno = 0;
	var nombreMejorAlumno;
	var notaMejorAlumno;
	var estadoCarreraMejorAlumno;

	// Nombre

	while (respuesta == true) {
		nombre = prompt("Ingrese su nombre y apellido:");

		// Sexo

		sexo = prompt("Ingrese el sexo: F, M o NB.")
		sexo = sexo.toUpperCase();

		while (sexo != "F" && sexo != "M" && sexo != "NB") {
			sexo = prompt("Error. Debe ingresar F para femenino, M para masculino y NB para no binario");
		}

		if(sexo == "NB"){
			contadorNoBinarios++;
		}

		// Edad

		edad = prompt("Ingrese la edad:")
		edad = parseInt(edad);

		while (edad < 18 || isNaN(edad)) {
			edad = prompt("Error. Debe ingresar una edad mayor a 18 años.");
			edad = parseInt(edad);
		}

		// Carrera

		carrera = prompt("Ingrese su carrera: P para programación, PS para psicología y D para diseño gráfico");
		carrera = carrera.toUpperCase();

		while (carrera != "P" && carrera != "PS" && carrera != "D") {
			carrera = prompt("Error. Debe ingresar P para programación, PS para psicología y D para diseño gráfico");
		}

		switch (carrera) {
			case "P":
				contadorProgramacion++;
				break;
			case "PS":
				contadorPsicologia++;
				break;
			case "D":
				contadorDiseñoGrafico++;
				break;
		}

		if(flagMasViejo == 0 && carrera == "PS"){ // Si es el primero y además la carrera es psicología, el nuevo máximo será el alumno actual:

			nombreAlumnoMasViejo = nombre;
			sexoAlumnoMasViejo = sexo;
			edadAlumnoMasViejo = edad;
			flagMasViejo = 1;  // flag++;
		}

		if(carrera == "PS" && edad > edadAlumnoMasViejo){ // Si la carrera es psicología y la edad del nuevo alumno es mayor a la del más viejo, mostrará la nueva edad:
			
				nombreAlumnoMasViejo = nombre;
				sexoAlumnoMasViejo = sexo;
				edadAlumnoMasViejo = edad;
		}

		if(sexo == "F" && carrera == "P"){
			contadorMujerProgramacion++;
		}

		// Estado de carrera

		estadoCarrera = prompt("Ingrese el estado de su carrera: E para en curso, A para abandonó y F para finalizado");
		estadoCarrera = estadoCarrera.toUpperCase();

		while (estadoCarrera != "E" && estadoCarrera != "A" && estadoCarrera != "F") {
			estadoCarrera = prompt("Error. Debe ingresar E para en curso, A para abandonó y F para finalizado");
		}

		// Nota

		nota = prompt("Ingrese su nota: entre 1 y 10")
		nota = parseInt(nota);

		while (nota < 0 || nota > 10) {
			nota = prompt("Error. Debe ingresar una nota entre 0 y 10.");
		}

		if(estadoCarrera == "F")
		{
			contadorNotas = contadorNotas + nota; // contadorNotas += nota;
			contadorAlumnosFinalizados++; // contadorAlumnosFinalizados = contadorAlumnosFinalizados + 1;
		}

		/* F.	Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología. */

		if(flagMejorAlumno == 0 && carrera == "PS" && sexo == "NB"){ // Si es el mejor y además la carrera es psicología y el sexo es NB, el nuevo máximo será el alumno actual:

			nombreMejorAlumno = nombre;
			notaMejorAlumno = nota;
			estadoCarreraMejorAlumno = estadoCarrera;
			flagMejorAlumno = 1;  // flag++;
		}

		if(carrera == "PS" && sexo == "NB" && nota > notaMejorAlumno){ // Si la carrera es psicología:
			
			nombreMejorAlumno = nombre;
			notaMejorAlumno = nota;
			estadoCarreraMejorAlumno = estadoCarrera;
		}

	respuesta = confirm("¿Desea ingresar otro alumno?");
	}
	if(isNaN(contadorNotas) && isNaN(contadorAlumnosFinalizados)){
		promedioNotasAlumnosFinalizados = "No hubo alumnos finalizados"
	}
	else
	{
		promedioNotasAlumnosFinalizados = contadorNotas / contadorAlumnosFinalizados;
	}

	console.log("Cantidad de mujeres en programación: " + contadorMujerProgramacion);
	console.log("Cantidad de alumnos no binarios: " + contadorNoBinarios);
	console.log("Promedio de notas de alumnos finalizantes: " + promedioNotasAlumnosFinalizados);
	console.log("El nombre del alumno más viejo de psicología es: " + nombreAlumnoMasViejo + " ,la edad es " + edadAlumnoMasViejo + " y el sexo es " + sexoAlumnoMasViejo);
	console.log("El nombre del mejor alumno que estudia psicología es: " + nombreMejorAlumno + " , la nota es " +  notaMejorAlumno + " y el estado de la carrera es " + estadoCarreraMejorAlumno);
}