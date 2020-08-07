function mostrar()
{
	let num;
	let i = 0;
	let acumulador = 0;
	let promedio = 0;

	while (i < 5) {
		num = parseInt (prompt ("Ingrese un número: "));
		acumulador = acumulador + num;
		i = i + 1; 
	}
	
	promedio = acumulador / i;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


	/*num = parseInt (prompt ("Ingrese un número: "));
	num = num + parseInt (prompt ("Ingrese un número: "));
	num = num + parseInt (prompt ("Ingrese un número: "));
	num = num + parseInt (prompt ("Ingrese un número: "));
	num = num + parseInt (prompt ("Ingrese un número: "));
	promedio = num / 5;
	document.getElementById("txtIdSuma").value = num;
	document.getElementById("txtIdPromedio").value = promedio;*/
	
	
	/*var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;*/
}//FIN DE LA FUNCIÓN