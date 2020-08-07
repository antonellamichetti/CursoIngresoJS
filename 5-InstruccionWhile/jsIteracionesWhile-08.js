/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let positivo = 0;
	let contador = 0;
	let num;
	let negativo = 1;
	let respuesta = "si";

	do {
		num = parseInt(prompt("Ingrese un número"));
		if (num >= 0) {
			positivo = num + positivo;
		}
		else {
			negativo = num * negativo;
		}
		contador = contador + 1;
		respuesta = prompt("Ingresa otro? si/no");
	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;


}//FIN DE LA FUNCIÓN