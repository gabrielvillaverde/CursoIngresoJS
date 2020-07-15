/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno + numeroDos;
	alert("La suma es: " + suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resta = numeroUno - numeroDos;
	alert("La resta es: " + resta);	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	multiplicacion = numeroUno * numeroDos;
	alert("La multiplicación es: " + multiplicacion);	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	division = numeroUno / numeroDos;
	alert("La división es: " + division);	
}

