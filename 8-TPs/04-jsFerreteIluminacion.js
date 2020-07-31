/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/

function CalcularPrecio () 

 /*
 Ejercicio bien hecho con IF (1):
 */

{
    var cantidadLamparas;
    var marcaLamparas;
    var precioFinal;
    var ingresosBrutos;

    cantidadLamparas = txtIdCantidad.value;
    marcaLamparas = Marca.value;

    cantidadLamparas = parseInt(cantidadLamparas);
    precioFinal = cantidadLamparas * 35;

    if(cantidadLamparas >= 6)
    {
        precioFinal *= 0.5;
    }
    else
    {
        if (cantidadLamparas == 5)
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                precioFinal *=  0.6;     
            }
            else
            {
                precioFinal *=  0.7;  
            }
        }
        if (cantidadLamparas == 4)
        {
            if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
            {
                precioFinal *= 0.75;     
            }
            else
            {
                precioFinal *= 0.8;
            }
        }
        if (cantidadLamparas == 3)
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                precioFinal *= 0.85;     
            }
            else
            {
                if(marcaLamparas == "FelipeLamparas")
                {
                    precioFinal *= 0.9; 
                }
                else
                {
                    precioFinal *= 0.95; 
                }
            }
        }
    }
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 0.1;
        precioFinal += ingresosBrutos;
        alert("Usted pago " + ingresosBrutos + " de IIBB.");
    }
    txtIdprecioDescuento.value = precioFinal;
}

/* Ejercicio bien hecho con IF (2):

{
    var precioLamparitas;
    var cantidadLamparitas;
    var marcaLamparitas;
    var descuento;
    var precioTotal;
    var precioConDescuento;
    var iibb;
    var costoIibb;
        
    precioLamparitas = 35;
    iibb = 0.1;
    costoIibb = 0;
    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marcaLamparitas = Marca.value;
    precioTotal = cantidadLamparitas * precioLamparitas;

    if(cantidadLamparitas>2)
    {
        if(cantidadLamparitas == 3)
        {
            if(marcaLamparitas == "ArgentinaLuz")
            {
                descuento = 0.85;
            }else
            {
                if(marcaLamparitas == "FelipeLamparas")
                {
                    descuento = 0.9;
                }else
                {
                    descuento = 0.95;
                }
            } 
        }
        else
        {
            if(cantidadLamparitas == 4) 
            {
                if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
                {
                    descuento = 0.75;
                }else
                {
                    descuento = 0.80;
                }    
            }else
            {
                if(cantidadLamparitas == 5)
                {
                    if(marcaLamparitas == "ArgentinaLuz")
                    {
                        descuento = 0.60;
                    }else
                    {
                        descuento = 0.70;
                    }
                }else
                {
                    descuento = 0.5;
                }
            }            
        }    
    precioConDescuento = precioTotal * descuento;  
    }

    if(precioConDescuento > 120)
    {
        costoIibb = precioConDescuento * iibb;      
        alert("Usted pago $" + costoIibb.toFixed(2) + " de IIBB.")
    }
     
    precioTotal = precioConDescuento + costoIibb;
    txtIdprecioDescuento.value = precioTotal.toFixed(2);  
}
*/    

/*Segundo intento con IF y ELSE, mal hecho:
{
    var precio;
    var cantidad;
    var marca;
    var descuento;
    var precioConDescuento;
    var precioSinDescuento;
    var precioFinal;
    var iibb;

    precio = 35;

    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);
    marca = document.getElementById("Marca").value;

    precioSinDescuento = precio * cantidad;
    precioConDescuento = precioSinDescuento - descuento;

    if(cantidad > 5)
    {
        descuento = precioSinDescuento * 0.50;
        precioConDescuento = precioSinDescuento - descuento;
        txtIdprecioDescuento.value = precioConDescuento;
    }
    else
    {
        if(cantidad == 5 && marca == "ArgentinaLuz")
        {
            descuento = precioSinDescuento * 0.40;
            precioConDescuento = precioSinDescuento - descuento;
            txtIdprecioDescuento.value = precioConDescuento;
        }
        else
        {
            descuento = precioSinDescuento * 0.30;
            precioConDescuento = precioSinDescuento - descuento;
            txtIdprecioDescuento.value = precioConDescuento;
        }
        if(cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = precioSinDescuento * 0.25;
            precioConDescuento = precioSinDescuento - descuento;
            txtIdprecioDescuento.value = precioConDescuento;
        }
        else
        {
            descuento = precioSinDescuento * 0.20;
            precioConDescuento = precioSinDescuento - descuento;
            txtIdprecioDescuento.value = precioConDescuento;
        }
        if(cantidad == 3 && marca == "ArgentinaLuz")
        {
            descuento = precioSinDescuento * 0.15;
            precioConDescuento = precioSinDescuento - descuento;
            txtIdprecioDescuento.value = precioConDescuento;
        }
        else
        {
            if(cantidad == 3 && marca == "FelipeLamparas")
            {
                descuento = precioSinDescuento * 0.10;
                precioConDescuento = precioSinDescuento - descuento;
                txtIdprecioDescuento.value = precioConDescuento;
            }
            else
            {
                descuento = precioSinDescuento * 0.50;
                precioConDescuento = precioSinDescuento - descuento;
                txtIdprecioDescuento.value = precioConDescuento;
            }
        }
    }
    if(precioConDescuento > 120)
    {
        iibb = precioConDescuento * 0.10;
        precioConDescuento + iibb;
        alert("Usted pagó $" + iibb + " de IIBB.")
    }
}
*/

/* Ejercicio hecho con SWITCH (1)
{
    var precio = 35;
    var cantidad;
    var marca;
    var descuento;
    var importeFinal;
    var iibb;
    var precioConDescuento;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cantidad)
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else if (marca == "FelipeLamparas")
            {
                descuento = 10;
            }
            else
            {
                descuento = 5;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
         
    }

    precioConDescuento = precio - precio * descuento / 100; // La variable precio ($35) - el porcentaje que toque según sea el caso.
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    importeFinal = precioConDescuento * cantidad;

    if(importeFinal > 120)
    {
        iibb = importeFinal * 10 / 100; // O sino: importeFinal * 0.1
        //importeFinal = importeFinal + iibb;
        alert(`Total: $${importeFinal += iibb}. Usted pagó $${iibb} de Ingresos Brutos`);
    }
    else
    {
        alert(`Total: $${importeFinal}`);
    }
}
*/

/* Ejercicio hecho con SWITCH (2):

{
	var cantidadLamparas;
	var precioLampara;
	var marcaLamparas;
	var porcentajeDescuento;
	var porcentajeDecimal;
	var descuento;
	var precioSinDescuento;
	var precioFinal;
	var ingresosBrutos;
	var montoIngresosBrutos;
	var precio;


	cantidadLamparas=txtIdCantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLamparas=Marca.value;

	precioLampara=35;

	switch (cantidadLamparas)
	{

		case 1:
		case 2:
			porcentajeDescuento=0;
			break;
		case 3:
			switch (marcaLamparas){
				case "ArgentinaLuz":
					porcentajeDescuento=15;
					break;
				case "FelipeLamparas":
					porcentajeDescuento=10;
					break;
				default:
					porcentajeDescuento=5;
					break;
			}
			break;
		case 4:
			switch(marcaLamparas){
				case "ArgentinaLuz":
					porcentajeDescuento=25;
					break;
				case "FelipeLamparas"	:
					porcentajeDescuento=25;
					break;
				default:
					porcentajeDescuento=20;
					break;	
			}
			break;
		case 5:
			switch(marcaLamparas){
				case "ArgentinaLuz":
					porcentajeDescuento=40;
					break;
				default:
					porcentajeDescuento=30;
					break;	
			}
			break;
		default:
			porcentajeDescuento=50;
			break;	
	}

	porcentajeDecimal=porcentajeDescuento/100;

	precioSinDescuento=cantidadLamparas*precioLampara;

	descuento=precioSinDescuento*porcentajeDecimal;

	precioFinal=precioSinDescuento-descuento;

	ingresosBrutos=10/100;

	montoIngresosBrutos=precioFinal*ingresosBrutos;

	precioDescuentoIB=precioFinal+montoIngresosBrutos;

		if (precioFinal<120) // no puedo usar switch xq es </>
	{
		txtIdprecioDescuento.value=precioFinal;
	}else
		{		
			txtIdprecioDescuento.value=precioDescuentoIB;

			alert("Usted pagó "+montoIngresosBrutos+" de IIBB.");
		} 	
}

/* Primer intento con IF y ELSE, mal hecho:
function CalcularPrecio () 
{
    var precioLamparas;
    var cantidadLamparas;
    var marcaLamparas;
    var precioConDescuento;
    var descuentoCincuenta;
    var descuentoCuarenta;
    var descuentoTreinta;
    var descuentoVeinticinco;
    var descuentoVeinte;
    var descuentoQuince;
    var descuentoDiez;
    var descuentoCinco;
    var ingresosBrutos;

    precioLamparas = 35;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaLamparas = Marca.value;

    descuentoCincuenta = parseInt(descuentoCincuenta);
    descuentoCuarenta = parseInt(descuentoCuarenta);
    descuentoTreinta = parseInt(descuentoTreinta);
    descuentoVeinticinco = parseInt(descuentoVeinticinco);
    descuentoVeinte = parseInt(descuentoVeinte);
    descuentoQuince = parseInt(descuentoQuince);
    descuentoDiez = parseInt(descuentoDiez);
    descuentoCinco = parseInt(descuentoCinco);
    ingresosBrutos = parseInt(ingresosBrutos);

    precioConDescuento = txtIdprecioDescuento.value;
    precioConDescuento = parseInt(precioConDescuento);

    descuentoCincuenta = ((precioLamparas * cantidadLamparas) * 0.50);
    descuentoCuarenta = ((precioLamparas * cantidadLamparas) * 0.40);
    descuentoTreinta = ((precioLamparas * cantidadLamparas) * 0.30);
    descuentoVeinticinco = ((precioLamparas * cantidadLamparas) * 0.25);
    descuentoVeinte = ((precioLamparas * cantidadLamparas) * 0.20);
    descuentoQuince = ((precioLamparas * cantidadLamparas) * 0.15);
    descuentoDiez = ((precioLamparas * cantidadLamparas) * 0.10);
    descuentoCinco = ((precioLamparas * cantidadLamparas) * 0.05);
    ingresosBrutos = precioConDescuento * 0.10;

    if(cantidadLamparas > 5)
	{
		txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoCincuenta);
    }
    else
	{
		if(cantidadLamparas == 5 && marcaLamparas=="ArgentinaLuz")
		{
		txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoCuarenta);
		}
		else
		{
            if(cantidadLamparas == 5)
            {
            txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoTreinta);
            }
            if(cantidadLamparas == 4 && (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"))
            {
            txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoVeinticinco);
            }
            else
            {
                if(cantidadLamparas == 4)
                {
                txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoVeinte);
                }
            }
            if(cantidadLamparas == 3 && marcaLamparas=="ArgentinaLuz")
            {
            txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoQuince);
            }
            else
            {
                if(cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas")
                {
                txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoDiez);
                }
                else
                {
                if(cantidadLamparas == 3)
                {
                txtIdprecioDescuento.value = ((precioLamparas * cantidadLamparas) - descuentoCinco);
                }
                }
            }
        }
    }
    if(precioConDescuento>120)
    {
        alert("IIBB Usted pagó " + (precioConDescuento + ingresosBrutos));
    }

}*/

/* Evitar repetir código. Solo tener un if
Un else que agrupará TODAS las otras condiciones.
Para la última condición, otro if.
Todas las otras condiciones van dentro del else.*/