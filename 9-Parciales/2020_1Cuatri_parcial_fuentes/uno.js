/*
Debemos realizar la carga de 5 (cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

El tipo: (validar "barbijo", "jabón" o "alcohol").
El precio: (validar entre 100 y 300).
La cantidad de unidades: (no puede ser 0 o negativo y no debe superar las 1000 unidades).
La marca y el fabricante.

Se debe informar al usuario lo siguiente:

A) Del más barato de los alcoholes, la cantidad de unidades y el fabricante. Preguntar en el bucle si el
producto es alcohol, búsqueda de mínimo condicionado a que sea alcohol. Con if o switch.

B) Del tipo con mas unidades, el promedio por compra. (de cada tipo contar cuántas unidades, adentro del bucle cuento y acumulo).

C) Cuántas unidades de jabones hay en total. Un contador.
*/

function mostrar()

{
	/* Declaración de variables. */

	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var contador = 0; // Inicializo el contador de vueltas en 0.
	var flag = false; // Inicializo una bandera en FALSE.
	var alcoholMasBarato;
	var cantidadUnidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var acumuladorComprasBarbijo = 0;
	var acumuladorCantidadBarbijo = 0;
	var acumuladorComprasJabon = 0;
	var acumuladorCantidadJabon = 0;
	var acumuladorComprasAlcohol = 0;
	var acumuladorCantidadAlcohol = 0;
	var mensajeAlcohol = "No se compraron alcoholes." // Se inicializa así el mensaje, luego dependiendo de si se ingresaron alcoholes o no, cambiará.
	
	// Loop de 5 repeticiones.
	while(contador < 5) // Mientras que el contador sea menor a 5...
	{
		// Validación del tipo de producto:
		tipo = prompt("Ingrese el tipo de producto: Barbijo, jabón o alcohol."); // Se le solicita al usuario que ingrese el tipo de producto.

		while (tipo != "Barbijo" && tipo != "Jabon" && tipo != "Alcohol") { // Mientras que el tipo de producto no sea un barbijo, un jabón o un alcohol...
			tipo = prompt("Error. Debe ingresar los siguientes tipos de producto: Barbijo, jabón o alcohol."); // ...dará este mensaje de error al usuario.
		}

		// Validación del precio:
		precio = prompt("Ingrese el precio."); // Se le solicita al usuario que ingrese el precio.
		precio = parseFloat(precio); // Se utiliza parseFloat por si el usuario ingresa un precio con valores decimales.

		while (isNaN(precio) || precio < 100 || precio > 300) { // Mientras que el precio sea menor a 100 o sea mayor a 100...
			precio = prompt("Error. Debe ingresar un precio entre 100 y 300."); // ...dará este mensaje de error al usuario.
			precio = parseFloat(precio); // Se utiliza parseFloat por si el usuario ingresa un precio con valores decimales.

		}

		// Validación de la cantidad de unidades:
		cantidadUnidades = prompt("Ingrese la cantidad de unidades."); // Se le solicita al usuario que ingrese la cantidad de unidades.
		cantidadUnidades = parseInt(cantidadUnidades);

		while (isNaN(cantidadUnidades) || cantidadUnidades <= 0 || cantidadUnidades > 1000) { // Mientras que la cantidad de unidades sea menor o igual a 0, o mayor de 1000...
			cantidadUnidades = prompt("Error. Debe ingresar un rango entre 1 y 1000 unidades."); // ...dará este mensaje de error al usuario.
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		// Solicito la marca (no pide validación).
		marca = prompt("Ingrese la marca."); // Se pide el dato de la marca pero no lo valido porque el ejercicio no lo requiere.

		// Solicito el fabricante (no pide validación).
		fabricante = prompt("Ingrese el fabricante"); // Se pide el dato del fabricante pero no lo valido porque el ejercicio no lo requiere.

		// A) INFORMAR: Del más barato de los alcoholes, la cantidad de unidades y el fabricante.

		if(flag == false && tipo == "Alcohol"){ // Bandera usada para reconocer que es el primer precio que se ingresa. Si la bandera está "bajada", y además el tipo de producto es igual a "Alcohol"...
			alcoholMasBarato = precio; // ...el primer precio ingresado se guardará en la variable alcoholMasBarato.
			cantidadUnidadesAlcoholMasBarato = cantidadUnidades; // ...la cantidad de unidades ingresada por primera vez se guardará en la variable cantidadUnidadesAlcoholMasBarato.
			fabricanteAlcoholMasBarato = fabricante; //...el fabricante ingresado por primera vez se guardará en la variable fabricanteAlcoholMasBarato.
			flag = true; // ...y se levanta la bandera, pasa a valer TRUE para que la próxima iteración que haga no se repita.
		}

		else if(precio < alcoholMasBarato && tipo == "Alcohol"){ //... sino, si el nuevo precio ingresado es menor al de alcoholMasBarato, y el tipo de producto es alcohol...
			alcoholMasBarato = precio; //... el precio del alcohol más barato pasará a estar acá.
			cantidadUnidadesAlcoholMasBarato = cantidadUnidades; //...la cantidad de unidades ingresada del alcohol más barato pasará a estar acá.
			fabricanteAlcoholMasBarato = fabricante; //...el fabricante del alcohol más barato pasará a estar acá.
			// ...y así hasta que terminen de darse todas las iteraciones.
		}

		// B) Del tipo con mas unidades, calcular el promedio por compra. 1RA PARTE.

		switch(tipo){ // Realizo un switch para la variable tipo.
			case "Barbijo": // En caso de que sea "Barbijo"...
				acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadUnidades;  //...declaro un acumulador para guardar la cantidad de unidades compradas de "Barbijo".
				acumuladorComprasBarbijo = acumuladorComprasBarbijo + 1; // ...declaro un contador que guarde la cantidad de veces que el usuario ingresó "Barbijo".
			break;
			case "Jabon": // En caso de que sea "Jabon"...
				acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadUnidades; //...declaro un acumulador para guardar la cantidad de unidades compradas de "Jabon".
				acumuladorComprasJabon = acumuladorComprasJabon + 1; // ...declaro un contador que guarde la cantidad de veces que el usuario ingresó "Jabon".
			break;
			case "Alcohol": // En caso de que sea "Alcohol"...
				acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadUnidades; //...declaro un acumulador para guardar la cantidad de unidades compradas de "Alcohol".
				acumuladorComprasAlcohol = acumuladorComprasAlcohol + 1; // ...declaro un contador que guarde la cantidad de veces que el usuario ingresó "Alcohol".
			break;
		}

	contador = contador + 1; // Contador de vueltas, cuando llegue a 5 finalizará el loop.
	}

	// B) Del tipo con mas unidades, calcular el promedio por compra. 2DA PARTE.

	if(acumuladorCantidadBarbijo > acumuladorCantidadJabon && acumuladorCantidadBarbijo > acumuladorCantidadAlcohol){ // Si la cantidad de unidades de barbijo es mayor a la cantidad de unidades de jabón y alcohol...
		promedio = acumuladorCantidadBarbijo / acumuladorComprasBarbijo; // ...la variable promedio guardará el calculo de la cantidad de unidades de barbijo ingresadas divididas la cantidad de compras de barbijo que hizo el usuario (es decir, cuántas veces de las 5 ingresó "Barbijo").
	}

	// Sino, si...
	else if(acumuladorCantidadJabon > acumuladorCantidadBarbijo && acumuladorCantidadJabon > acumuladorCantidadAlcohol){
		promedio = acumuladorCantidadJabon / acumuladorComprasJabon;
	}

	// Sino, si...
	else if(acumuladorCantidadAlcohol > acumuladorCantidadBarbijo && acumuladorCantidadAlcohol > acumuladorCantidadJabon){
		promedio = acumuladorCantidadAlcohol / acumuladorComprasAlcohol;
	}

	// A) INFORMAR: Del más barato de los alcoholes, la cantidad de unidades y el fabricante.
	console.log("Del alcohol más barato, la cantidad de unidades es: " + cantidadUnidadesAlcoholMasBarato + " y el fabricante es: " + fabricanteAlcoholMasBarato + ". El precio del alcohol más barato es: $" + alcoholMasBarato);
	
	// B) Del tipo con mas unidades, el promedio por compra.
	console.log("El promedio por compra del tipo con más unidades es: " + promedio);

	// C) Cuántas unidades de jabones hay en total. Un contador.
	console.log("La cantidad de unidades de jabón que hay es: " + acumuladorCantidadJabon);

	// En el caso de que quiera controlar si se ingresaron o no alcoholes, hacer lo siguiente:
	if(flag == true){ // Si la bandera está como TRUE, significa que sí se ingresaron alcoholes. Sino, muestra el mensaje que está declarado al principio de todo el código cuando declaré la variable mensajeAlcohol por primera vez.
		mensajeAlcohol = "Del alcohol más barato, la cantidad de unidades es: " + cantidadUnidadesAlcoholMasBarato + " y el fabricante es: " + fabricanteAlcoholMasBarato + ". El precio del alcohol más barato es: $" + alcoholMasBarato;
	}
	console.log(mensajeAlcohol);
}
