/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let acumulador = 0;
	let contador = 0;
	let num;
	let respuesta = "si";

	do {
		num = parseInt(prompt("Ingrese un número"));
		acumulador = num + acumulador;
		contador = contador + 1;

		respuesta = prompt("Ingresa otro? si/no");

	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN