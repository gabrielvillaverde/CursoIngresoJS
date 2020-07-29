/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador = 10;
	
	while(contador>0)
	{
		document.write(contador);
		contador = contador - 1;
	}
}

/*{
    //1-2-3-4-5-6-7-8-9-10

    var i;//variable de control

    i = 0;

    while(i<10)//condicion de continuidad de bucle
    {
         /*Sentencias que hagan que la condicion sea falsa // Bucle infinito */
        
        
        /*sentencias que se repiten
        //document.write("<h3>" + i + "</h3>" + "<br>");
        console.log(i+1);
       i=i+1;//contador
       //i++;
        
    }
}
*/