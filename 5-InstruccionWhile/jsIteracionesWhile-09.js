/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let num;
	let respuesta = "si";
	let numMax; //no icializar en 0
	let numMin; // " "
	let flag = 0;

	do {
		num = parseInt(prompt("Ingrese un número"));

		if (flag == 0 || num > numMax) {
			numMax = num;
		}

		if (flag == 0 || num < numMin) {
			numMin = num;
			flag = 1;
		}
		respuesta = prompt("desea continuar? si/no");
	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;



	/*// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';*/

	/*while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
}//FIN DE LA FUNCIÓN