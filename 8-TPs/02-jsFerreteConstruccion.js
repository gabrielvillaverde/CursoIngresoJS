/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var rectanguloAlambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    rectanguloAlambre = (largo + ancho + largo + ancho) * 3;
    /* También es válido rectanguloAlambre = (largo * 2 + ancho * 2) * 3; */
    alert("La cantidad de alambre a comprar es " + rectanguloAlambre);
    


}
function Circulo () 
{
    var radio;
    var cantidadTotalAlambre;
    radio = txtIdRadio.value;
    /* O bien document.getElementById("txtIdRadio").value; */
    radio = parseFloat(radio);
    cantidadTotalAlambre = (2 * Math.PI * radio) * 3;
    /* Para obtener la circunferencia, también puedo poner (2 * 3,14 * radio) * 3; */
    alert("La cantidad de alambre necesaria será " + cantidadTotalAlambre);

}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsasCemento;
    var bolsasCal;
    var sumaMedidasTerreno;
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    sumaMedidasTerreno = largo * ancho;
    /* En este caso se obtiene la superficie */
    bolsasCemento = sumaMedidasTerreno * 2;
    bolsasCal = sumaMedidasTerreno * 3;
   
    alert("Las bolsas de cemento que se necesitan son: " + bolsasCemento);
    alert("Las bolsas de cal que se necesitan son: " + bolsasCal);

    /* También aplica alert("Se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal");
    
    Otra manera de hacer el ejercicio:

    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;
    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal ");
    
    */

    
}