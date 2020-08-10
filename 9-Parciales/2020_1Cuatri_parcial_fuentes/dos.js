/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construcción, hasta que el cliente quiera:

Validar: si es arena, cal o cemento.
Pedir: cantidad de bolsas.
Pedir: precio por bolsa (más de cero).

Si compro más de 10 bolsas en total, tenés 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total, tenés 25% de descuento sobre el total a pagar.

Mostrar:
A) El importe total a pagar, bruto sin descuento y...
B) El importe total a pagar con descuento (solo si corresponde).
D) Informar el tipo con más cantidad de bolsas.
F) Informar el tipo más caro.
*/

function mostrar() {

  /* Declaración de variables. */

  var tipoProducto;
  var cantidadBolsas;
  var precioBolsas;
  var respuesta = true;
  var totalPagar = 0;
  var precioFinal;
  var acumuladorCantidadBolsas = 0;
  var acumuladorCantidadBolsasArena = 0;
  var acumuladorCantidadBolsasCal = 0;
  var acumuladorCantidadBolsasCemento = 0;
  var flag = false;
  var tipoMasCaro = 0;
  var precioMasCaro = 0;

  /* Bucle del tipo: hasta que el usuario quiera (do while). */

  do 
  {
    // Validación del tipo de producto:
    tipo = prompt("Ingrese el tipo de producto: Arena, cal o cemento."); // Se le solicita al usuario que ingrese el tipo de producto.
    while (tipo != "Arena" && tipo != "Cal" && tipo != "Cemento"){ // Mientras que el tipo de producto no sea arena, cal o cemento.
      tipo = prompt("Error. Debe ingresar los siguientes tipos de producto: Arena, cal o cemento."); // ...dará este mensaje de error al usuario.
    }

    // Solicito la cantidad de bolsas:
    cantidadBolsas = prompt("Ingrese la cantidad de bolsas que quiere comprar:");
    cantidadBolsas = parseInt(cantidadBolsas);
    // Y me encargo de chequear que el usuario ingrese valores numéricos.
    while (isNaN(cantidadBolsas) || cantidadBolsas <= 0) { // Mientras el valor de cantidadBolsas no sea un número, o sea menor o igual a 0...
      cantidadBolsas = prompt("Error. Debe ingresar un valor numérico mayor a 0 para la cantidad de bolsas."); // ...dará este mensaje de error al usuario.
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    // Validación del precio por bolsa:
    precioBolsas = prompt("Ingrese el precio por bolsa."); // Se le solicita al usuario que ingrese el precio por bolsa.
    precioBolsas = parseInt(precioBolsas);
    // Y chequeo que el valor ingresado sea mayor a 0 o sea un número.
    while (isNaN(precioBolsas) || precioBolsas <= 0) { // Mientras que el precio de las bolsas sea menor/igual a 0 o no sea un número...
      precioBolsas = prompt("Error. Debe ingresar un precio mayor a 0."); // ...dará este mensaje de error al usuario.
      precioBolsas = parseInt(precioBolsas);
    }

    acumuladorCantidadBolsas = acumuladorCantidadBolsas + cantidadBolsas; // Acumulador de la cantidad de bolsas.

    // A) Mostrar el importe total a pagar, bruto sin descuento.

    totalPagar = totalPagar + (precioBolsas * cantidadBolsas); // Si yo no declaro el acumulador totalPagar, si no sumo a totalPagar va a reemplazar por el último valor ingresado.

    // D) Informar el tipo con más cantidad de bolsas.

    switch (tipo) {
      case "Arena":
        acumuladorCantidadBolsasArena+=cantidadBolsas;        
        break;
      case "Cal":
        acumuladorCantidadBolsasCal+=cantidadBolsas;
        break;
      case "Cemento":
        acumuladorCantidadBolsasCemento+=cantidadBolsas;      
    }

    // F) Informar el tipo más caro.

    if(flag == false){ // Esta bandera indica que es el primer producto ingresado.
      tipoMasCaro = tipo;
      precioMasCaro = precioBolsas; // 
			flag = true; // Bandera en TRUE significa que ya ingresó el primero, así no vuelve a leer esta parte.
		}

		else if(precioBolsas > precioMasCaro){ //... 
      tipoMasCaro = tipo;
      precioMasCaro = precioBolsas; //... 
    }

    respuesta = confirm("¿Quiere comprar otro producto?");
  }

  while (respuesta == true);

  // A) Mostrar el importe total a pagar, bruto sin descuento.

  console.log("El importe total a pagar, bruto y sin descuento es $" + totalPagar);

  // B) Mostrar el importe total a pagar con descuento (solo si corresponde).

  // Si compro más de 10 bolsas en total, tenés 15% de descuento sobre el total a pagar.

  if (acumuladorCantidadBolsas >= 10 && acumuladorCantidadBolsas < 30) { // Si la cantidad de bolsas es mayor o igual a 10...
    precioFinal = totalPagar * 0.85; // ...el precio final será igual al total a pagar * 0.85 (es decir, se calcula cuánto sería con un descuento del 15%).
    console.log("Compraste más de 10 bolsas, por lo tanto tu descuento es del 15% y el importe total a pagar es de: $" + precioFinal);
  }

  // Si compro más de 30 bolsas en total, tenés 25% de descuento sobre el total a pagar.

  else if (acumuladorCantidadBolsas >= 30) { // Si la cantidad de bolsas es mayor o igual a 30...
    precioFinal = totalPagar * 0.75; // ...el precio final será igual al total a pagar * 0.75 (es decir, se calcula cuánto sería con un descuento del 25%).
    console.log("Compraste más de 30 bolsas, por lo tanto tu descuento es del 25% y el importe total a pagar es de: $" + precioFinal);
  } 
  
  // D) Informar el tipo con más cantidad de bolsas.

  // ERROR: estoy repitiendo el console.log tres veces. Mejor crear una variable para el tipo con más cantidad.
  // https://www.onlinegdb.com/BkNsu73bP
  if(acumuladorCantidadBolsasArena > acumuladorCantidadBolsasCal && acumuladorCantidadBolsasArena > acumuladorCantidadBolsasCemento){
    console.log("El tipo con más cantidad de bolsas es la arena, con una cantidad de: " + acumuladorCantidadBolsasArena);
  }
  
  else if(acumuladorCantidadBolsasCal > acumuladorCantidadBolsasArena && acumuladorCantidadBolsasCal > acumuladorCantidadBolsasCemento){
    console.log("El tipo con más cantidad de bolsas es la cal, con una cantidad de: " + acumuladorCantidadBolsasCal);
  }

  else if(acumuladorCantidadBolsasCemento > acumuladorCantidadBolsasArena && acumuladorCantidadBolsasCemento > acumuladorCantidadBolsasCal){
    console.log("El tipo con más cantidad de bolsas es el cemento, con una cantidad de: " + acumuladorCantidadBolsasCemento);
  }

  // F) Informar el tipo más caro.
    
  console.log("El tipo más caro es: " + tipoMasCaro + " con un precio de: $" + precioMasCaro);

}


