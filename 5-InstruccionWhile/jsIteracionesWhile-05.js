/*
Al presionar el botón pedir un sexo
'F' para femenino, 'M' para masculino.*/
function mostrar()
{
	var sexo
	sexo = prompt("Ingrese su sexo: F ó M.");

	while(sexo!= "F" && sexo!= "M") // Si uso el O, y pongo while(sexo!= "F" || sexo!= "M") me va a pedir el reingreso, sea lo que sea que ingrese.
	{
		sexo = prompt("Ingrese su sexo: F ó M.");
	}
	txtIdSexo.value = sexo;
}