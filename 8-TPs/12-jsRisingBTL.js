/* RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga
de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego
asignarla a cuadros de textos. 

12. Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. */

function ComenzarIngreso () 
{
	var edad;
 	var sexo;
 	var estadoCivil;
	var sueldoBruto;
	var lejago;
	var nacionalidad;

	edad = prompt("Ingrese su edad:")
	edad = parseInt(edad);

	while(edad < 18 || edad > 90 || isNaN(edad))
	{
		edad = prompt("Error. Debe ingresar una edad entre 18 y 90 años inclusive.");
		edad = parseInt(edad);
	}

	txtIdEdad.value = edad;

	sexo = prompt("Ingrese su sexo: F ó M.");
	sexo = sexo.toUpperCase();
	
	while(sexo!= "F" && sexo!= "M")
	{
		sexo = prompt("Error. Ingrese su sexo: F ó M.");
	}

	txtIdSexo.value = sexo;

	estadoCivil = prompt("Ingrese su estado civil: 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo.");
	estadoCivil = parseInt(estadoCivil);

	while(estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil))
	{
		estadoCivil = prompt("Error. Debe ingresar 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo.");
		estadoCivil = parseInt(estadoCivil);
	}

	switch(estadoCivil)
	{
		case 1:
			estadoCivil = "Soltero";
		break;
		case 2:
			estadoCivil = "Casado";
		break;
		case 3:
			estadoCivil = "Divorciado";
		break;
		case 4:
			estadoCivil = "Viudo";		
	}

	txtIdEstadoCivil.value = estadoCivil;

	sueldoBruto = prompt("Ingrese su sueldo bruto (no menor a $8000):");
	sueldoBruto = parseInt(sueldoBruto);

	while(sueldoBruto < 8000 || isNaN(sueldoBruto))
	{
		sueldoBruto = prompt("Error. Debe ingresar un sueldo bruto mayor a $8000.");
		sueldoBruto = parseInt(sueldoBruto);
	}

	txtIdSueldo.value = sueldoBruto;

	lejago = prompt("Ingrese su número de legajo:");
	lejago = parseInt(lejago);

	while(lejago <1000 || lejago > 9999 || isNaN(lejago))
	{
		lejago = prompt("Error. Debe ingresar un número de legajo válido.");
		lejago = parseInt(lejago);
	}

	txtIdLegajo.value = lejago;

	nacionalidad = prompt("Ingrese su nacionalidad: A para argentinos, E para extranjeros y N para nacionalizados.");
	
	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")//Muestra la letra pero no la descripción del estado civil. Utilizar toLowerCase("A") o upperCase para mayúsculas.
	{
		nacionalidad = prompt("Error. Debe ingresar A para argentinos, E para extranjeros y N para nacionalizados.");
	}

	switch(nacionalidad)
	{
		case "A":
			nacionalidad = "Es argentino/a";
		break;
		case "E":
			nacionalidad = "Es extranjero";
		break;
		case "N":
			nacionalidad = "Es nacionalizado";
		break;	
	}

	txtIdNacionalidad.value = nacionalidad;
}

/*{
	var sexo
	sexo = prompt("Ingrese su sexo: F ó M.");

	while(sexo!= "F" && sexo!= "M") // Si uso el O, y pongo while(sexo!= "F" || sexo!= "M") me va a pedir el reingreso, sea lo que sea que ingrese.
	{
		sexo = prompt("Ingrese su sexo: F ó M.");
	}
	txtIdSexo.value = sexo;
}
*/