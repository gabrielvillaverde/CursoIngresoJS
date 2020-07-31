/*
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
    // 1-2-3-4-5-6-7-8-9-10

    var i; // Variable de control

    i = 0;

    while(i<10) // Condicion de continuidad de bucle
    {
        /* Sentencias que hagan que la condicion sea falsa, determinará un bucle infinito */
        
        
        /* Sentencias que se repiten */
        /* document.write("<h3>" + i + "</h3>" + "<br>"); */
        console.log(i+1);
        i=i+1; // Contador // "i++"" es la versión contraída de i=1+1    
    }
}