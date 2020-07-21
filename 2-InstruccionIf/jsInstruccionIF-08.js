function mostrar()
{
	var edad;
	var eCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	eCivil = estadoCivil.value;
		
if(edad<18 && eCivil != "Soltero")
{/*Evitar dejar esta llave vacía, negación quizás*/
}
if
	(edad>17 && eCivil == "Soltero")
	alert("Es soltero y no es menor");
}