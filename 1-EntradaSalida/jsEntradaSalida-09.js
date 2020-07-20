/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	sueldo = txtIdSueldo.value;
	resultado = txtIdResultado.value;
	sueldo = parseInt(sueldo);
	aumento = sueldo * 10/100;
	txtIdResultado.value = sueldo + aumento;
	/* Para ingresar el alert es:
	alert("El aumento es: " + aumento);
	*/
}
	
{
	/* Ejercicio 1 de la clase de repaso
	var producto;
	var importe;
	var porcentajeAumento;
	var aumento;
	producto = prompt("Ingrese su producto");
	importe = prompt("Ingrese su importe");
	importe = parseInt(importe);
	porcentajeAumento = prompt("Ingrese el porcentaje de aumento");
	porcentajeAumento = parseInt(porcentajeAumento);
	porcentajeAumento = (importe * porcentajeAumento) / 100;
	aumento = parseInt(aumento);
	aumento = importe + porcentajeAumento;
	alert("El producto cuesta: $" + importe + " sin aumento. Tiene aumento de: $" + porcentajeAumento + " y el precio final es: $" + aumento);
	*/
}

{
	/* Ejercicio 2 de la clase de repaso
	var ancho;
	var largo;
	var perimetro;
	var superficie;
	ancho = prompt("Ingrese el ancho");
	ancho = parseInt(ancho);
	largo = prompt("Ingrese el largo");
	largo = parseInt(largo);
	perimetro = (ancho * largo) * 2;
	superficie = ancho * largo;
	alert("El terreno tiene " + ancho + " metros de ancho y " + largo + " metros de largo. Su perímetro total es de " + perimetro + " y la superficie es de " + superficie);
	*/
}

{
	/* Ejercicio 3 de la clase de repaso
	var importeUno;
	var importeDos;
	var porcentajeDescuento;
	var suma;
	var descuento;
	var precioConDescuento;
	var iva;
	var precioFinal;
	importeUno = prompt("Ingrese el primer importe");
	importeUno = parseInt(importeUno);
	importeDos = prompt("Ingrese el segundo importe");
	importeDos = parseInt(importeDos);
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");
	porcentajeDescuento = parseInt(porcentajeDescuento);
	suma = importeUno + importeDos;
	descuento = (suma * porcentajeDescuento) / 100;
	precioConDescuento = parseInt(precioConDescuento);
	precioConDescuento = suma - descuento;
	iva = parseInt(iva);
	iva = precioConDescuento * 0.21; // O bien hacer precioConDescuento * 21 / 100 //
	precioFinal = precioConDescuento + iva;
	alert("Los productos cuestan $" + importeUno + " y $" + importeDos + ", sumados son $" + suma + ", tienen un descuento de $" + descuento + " pesos, el precio total con descuento es $" + precioConDescuento + ", el IVA es de $" + iva + " y el precio final con IVA es de $" + precioFinal);
	*/
}