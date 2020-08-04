/*
Al presionar el botón pedir un sexo: 'F' para femenino, 'M' para masculino.
*/

function mostrar()
{
	var sexo; // Declaro la variable sexo...
	sexo = prompt("Ingrese su sexo: F ó M."); // ...y la pido por prompt al usuario.
	sexo = sexo.toUpperCase(); // Declaro la función "toUpperCase()"" para que las minúsculas ingresadas las convierta a mayúsculas.

	while(sexo!= "F" && sexo!= "M") // Mientras que el sexo no sea "F" y no sea "M"...
	{
		sexo = prompt("Error. Ingrese su sexo: F ó M."); // ...el usuario recibirá este mensaje de error.
		sexo = sexo.toUpperCase();
	}
	txtIdSexo.value = sexo; // Muestro por ID el sexo del usuario.
}