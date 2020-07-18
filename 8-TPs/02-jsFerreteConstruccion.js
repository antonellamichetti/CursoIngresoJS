/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var vLargo;
    var vAncho;
    var vResult;
    vLargo = parseFloat (document.getElementById("txtIdLargo").value);
    vAncho = parseFloat (document.getElementById("txtIdAncho").value);
    vResult = (vLargo*vAncho)*3;

    alert ("Usted necesitará "+vResult.toFixed (2)+" metros de alambre");

}
function Circulo () 
{
    var vRadio;
    var vResult;
    vRadio = parseFloat (document.getElementById("txtIdRadio").value);
    vResult = (vRadio*2*3.14)*3;

    alert ("Usted necesitará "+vResult.toFixed (2)+" metros de alambre");
    
}
function Materiales () 
{
	var vLargo;
    var vAncho;
    var vResult;
    var vCemento;
    var vCal;
    vLargo = parseFloat (document.getElementById("txtIdLargo").value);
    vAncho = parseFloat (document.getElementById("txtIdAncho").value);
    vResult = vLargo*vAncho;
    vCemento = parseInt (vResult*2);
    vCal = parseInt (vResult*3);

    alert ("Usted necesitará "+vCemento+" bolsas de cemento y "+vCal+" bolsas de cal");

}