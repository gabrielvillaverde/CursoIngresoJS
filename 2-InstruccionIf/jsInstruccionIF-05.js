function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)
		alert("No es adolescente");

}

/* Otra forma de hacerlo pero no la ideal porque queda un if hueco, no hacer.

{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(edad>12 && edad<18)
	{
	}
	else
	{
		alert("No es adolescente");
	}

}
*/

/* Otra forma, con negación:
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(!(edad>12 && edad<18))
		alert("No es adolescente");

}
*/