/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var vPrecio1;
    var vPrecio2;
    var vPrecio3;
    var vResult;
    vPrecio1 = parseFloat (document.getElementById("txtIdPrecioUno").value);
    vPrecio2 = parseFloat (document.getElementById("txtIdPrecioDos").value);
    vPrecio3 = parseFloat (document.getElementById("txtIdPrecioTres").value);
    vResult = vPrecio1+vPrecio2+vPrecio3;

    alert ("La suma es "+vResult.toFixed(2));
	
}
function Promedio () 
{
	var vPrecio1;
    var vPrecio2;
    var vPrecio3;
    var vResult;
    vPrecio1 = parseFloat (document.getElementById("txtIdPrecioUno").value);
    vPrecio2 = parseFloat (document.getElementById("txtIdPrecioDos").value);
    vPrecio3 = parseFloat (document.getElementById("txtIdPrecioTres").value);
    vResult = (vPrecio1+vPrecio2+vPrecio3)/3;

    alert ("El promedio es "+vResult.toFixed(2));
}
function PrecioFinal () 
{
	var vPrecio1;
    var vPrecio2;
    var vPrecio3;
    var vResult;
    vPrecio1 = parseFloat (document.getElementById("txtIdPrecioUno").value);
    vPrecio2 = parseFloat (document.getElementById("txtIdPrecioDos").value);
    vPrecio3 = parseFloat (document.getElementById("txtIdPrecioTres").value);
    vResult = (vPrecio1+vPrecio2+vPrecio3)*1.21;

    alert ("El precio final es "+vResult.toFixed(2));
}