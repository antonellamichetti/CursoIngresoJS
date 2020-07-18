/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var vImporte;
	vImporte = parseInt (document.getElementById("txtIdImporte").value);
	document.getElementById("txtIdResultado").value = vImporte - vImporte*0.25;
	/*alert("ok")*/;
}
