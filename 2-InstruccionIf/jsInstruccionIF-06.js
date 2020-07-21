function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	if(edad > 12)
	{
		if(edad < 18)
			alert("Es adolescente");
	}
	else
		alert("Es menor de edad");
}