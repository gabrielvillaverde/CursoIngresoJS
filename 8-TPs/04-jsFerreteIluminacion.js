/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/

function CalcularPrecio () 
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

/* Funciona el código, pero está mal la lógica:
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