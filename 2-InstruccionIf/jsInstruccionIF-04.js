function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>12 && edad<18)
	{
	alert("Es adolescente");
	}
}
/* Otra manera de hacerlo, aunque no la mejor:
if(edad > 12)
{
	if(edad < 18)
		alert("Eres un adolescente");
}
*/