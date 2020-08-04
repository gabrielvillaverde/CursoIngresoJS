/*
Al presionar el botón mostrar 10 repeticiones con números ascendente, desde el 1 al 10.
*/
function mostrar()
{
    var contador; // Variable de control denominada "contador".

    contador = 0; // Se inicializa la variable contador en 0, de lo contrario dirá undefined a la hora de calcular.

    while(contador < 10) // Condicion de continuidad de bucle: mientras que contador sea inferior a 10...
    {
        // Las sentencias que hagan que la condicion sea falsa, determinarán un bucle infinito.
        
        // Sentencias que se repiten: y al sumarle el valor 1 se repetirán 10 veces hasta que el resultado sea mayor a 10, en ese caso finaliza el bucle.
        console.log(contador + 1); // Se muestra por console.log todos los números sumados.
        contador = contador + 1; // Es lo mismo que "contador++"" o "contador += 1".
        // Otra forma de mostrarlo: document.write("<h3>" + contador + "</h3>" + "<br>");
    }
}