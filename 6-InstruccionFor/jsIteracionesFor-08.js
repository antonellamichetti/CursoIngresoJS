function mostrar() {
	let num;
	let cont = 0;

	do {
		num = parseInt(prompt("Ingrese un número"));
	} while (num < 1 || isNaN(num));


	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			cont++;
		}

	}
if (cont >= 1) {
	alert (num + " NO ES PRIMO" );
}

else {
	alert (num + " ES PRIMO" );
}

}//FIN DE LA FUNCIÓN