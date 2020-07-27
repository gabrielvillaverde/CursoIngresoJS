function mostrar()
{
	var edad;
	var eCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	eCivil = estadoCivil.value;
		
	if(edad>17 && eCivil == "Soltero")
	{
	alert("Es soltero y no es menor");
	}
}

/* Ejercicio hecho con negación, aunque más difícil:
{
	var edad;
	var eCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	eCivil = estadoCivil.value;
		
	if(!(edad<18 || eCivil != "Soltero"))
	{
	alert("Es soltero y no es menor");
	}
}
*/
