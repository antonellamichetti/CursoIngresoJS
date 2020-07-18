/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var vNumeroUno;
	var vNumeroDos;
	var vResultado;
	vNumeroUno = parseInt (document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt (document.getElementById("txtIdNumeroDos").value);
	vResultado = vNumeroUno+vNumeroDos;

	alert ("La suma es "+vResultado);
	/*alert("ok");*/	
}

function restar()
{
	var vNumeroUno;
	var vNumeroDos;
	var vResultado;
	vNumeroUno = parseInt (document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt (document.getElementById("txtIdNumeroDos").value);
	vResultado = vNumeroUno-vNumeroDos;

	alert ("La resta es "+vResultado);
}

function multiplicar()
{ 
	var vNumeroUno;
	var vNumeroDos;
	var vResultado;
	vNumeroUno = parseInt (document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt (document.getElementById("txtIdNumeroDos").value);
	vResultado = vNumeroUno*vNumeroDos;

	alert ("La multiplicación es "+vResultado);
}

function dividir()
{
	var vNumeroUno;
	var vNumeroDos;
	var vResultado;
	vNumeroUno = parseFloat (document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseFloat (document.getElementById("txtIdNumeroDos").value);
	vResultado = vNumeroUno/vNumeroDos;

	alert ("La división es "+vResultado.toFixed(2));
}

