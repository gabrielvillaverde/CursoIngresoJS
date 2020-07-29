/*
Una agencia de viajes debe sacar las tarifas de los viajes. Se cobra $15.000 por cada estadía como base, se pide el ingreso de una estación del año y localidad para vacacionar para poder calcular el precio final.

En invierno: Bariloche tiene un aumento del 20%, Cataratas y Córdoba tiene un descuento del 10%, Mar del Plata tiene un descuento del 20%.

En verano: Bariloche tiene un descuento del 20%, Cataratas y Córdoba tiene un aumento del 10%, Mar del Plata tiene un aumento del 20%.

En otoño y primavera: Bariloche tiene un aumento del 10%, Cataratas tiene un aumento del 10%, Mar del Plata tiene un aumento del 10% y Córdoba tiene el precio sin descuento.
*/

function mostrar()
{
	var estacion = txtIdEstacion.value;
	var destino = txtIdDestino.value;

	var precio = 15000;
	var precioModificado;
	var precioFinal;

	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					precioModificado = 1.20;
				break;
				case "Cataratas":
				case "Cordoba":
					precioModificado = 0.90;
				break;
				case "Mar del Plata":
					precioModificado = 0.80;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					precioModificado = 0.80;
				break;				
				case "Mar del Plata":
					precioModificado = 1.20;
				break;
				case "Cataratas":
				case "Cordoba":
					precioModificado = 1.10;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del Plata":
					precioModificado = 1.10;
				break;
				default:
					precioModificado = 1;		
			}
	}
	precioFinal = precio * precioModificado;
	alert(precioFinal);
}

/* Que el alert esté una sola vez al final del ejercicio.
Que cada case sirva para setear los descuentos o aumentos.
Tratar de repetir la menor cantidad de código posible*/