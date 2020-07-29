/*
Al seleccionar un destino informar si hace frío o calor en ese destino.
*/

function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del Plata":
			alert("Calor");
		break;
		case "Ushuaia":
		case "Bariloche":
			alert("Frío");
	}
}