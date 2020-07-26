function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if(edad>12 && edad<18)
		{
		alert("Es adolescente");
		}
		else
		{
		alert("Es menor de edad");
		}
	}
}
