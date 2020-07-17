/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

