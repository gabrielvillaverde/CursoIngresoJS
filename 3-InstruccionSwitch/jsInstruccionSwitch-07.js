/*
Al selecionar un destino, indicar el punto cardinal de nuestro país en donde se encuentra: norte, sur, este u oeste.
*/

function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del Plata":
			alert("Este");
		break;
		case "Ushuaia":
		case "Bariloche":
			alert("Sur");
	}
}

/* Ejercicio hecho con IF ELSE
{
	var destino = txtIdDestino.value;
	
	if(destino == "Bariloche" || destino == "Ushuaia")
	{
		alert("Sur");
	}
	else if(destino == "Mar del Plata" || destino == "Cataratas")
	{
		alert("Este");
	}
	else
	{
		alert("Ese no es un destino válido.");
	}
}
*/