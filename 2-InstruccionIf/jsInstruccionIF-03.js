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
		alert("Es menor de edad");
	}
}