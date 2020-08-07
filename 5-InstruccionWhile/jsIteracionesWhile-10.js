/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let num;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantPositivos = 0;
	let cantNegativos = 0;
	let cantCeros = 0;
	let cantNumPares = 0;
	let PromPositivos;
	let PromNegativos;
	let DifPostNeg;
	//let contador =0;

	respuesta = "s";

	do {
		num = parseInt(prompt("Ingrese un número: "));

		if (num > 0) {
			sumaPositivos = sumaPositivos + num
			cantPositivos = cantPositivos + 1;
		}
		else if (num < 0) {
			sumaNegativos = sumaNegativos + num
			cantNegativos = cantNegativos + 1;
		}
		else if (num == 0) {
			cantCeros = cantCeros + 1;
		}

		if (num % 2 == 0) {
			cantNumPares = cantNumPares + 1;
		}

		respuesta = prompt("desea continuar ingresando números? si/no");
	} while (respuesta == "s");


	if (cantPositivos == 0) {
		PromPositivos == "no se puede dividir por 0";
	}
	else if (!(cantPositivos == 0)) {
		PromPositivos = sumaPositivos / cantPositivos;
	}

	if (cantNegativos == 0) {
		PromNegativos == "no se puede dividir por 0";
	}
	else if (!(cantNegativos == 0)) {
		PromNegativos = sumaNegativos / cantNegativos;
	}

	DifPostNeg = (sumaPositivos - (sumaNegativos)); // VER ACA LOS SIGNOS, -- = + !!

	document.write("La suma de negativos es :" + sumaNegativos + "<br>");
	document.write("La suma de positivos es :" + sumaPositivos + "<br>");
	document.write("La cantidad de negativos es :" + cantNegativos + "<br>");
	document.write("La cantidad de positivos es :" + cantPositivos + "<br>");
	document.write("La cantidad de ceros es :" + cantCeros + "<br>");
	document.write("La cantidad de números pares es :" + cantNumPares + "<br>");
	document.write("El promedio de positivos :" + PromPositivos + "<br>");
	document.write("La promedio de negativos :" + PromNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos :" + DifPostNeg + "<br>");


}//FIN DE LA FUNCIÓN