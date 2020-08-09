
function mostrar() {
	let producto;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contjabones = 0;
	let contalcohol = 0;
	let contbarbijo = 0;
	let flagalc = 0;
	let acualcohol = 0;
	let acubarbijo = 0;
	let acujabones = 0;
	let tipomasunidades;
	let promedio;
	let preciomenor;
	let cantidadalcohol;
	let fabricantealcohol;

	for (let i = 0; i < 5; i++) {
		producto = prompt("Ingrese producto");
		do {
			tipo = prompt("Ingrese tipo");
		} while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol"));

		do {
			precio = parseFloat(prompt("Ingrese el precio entre 100 y 300"));
		} while (precio < 100 || precio > 300);
		do {
			cantidad = parseInt(prompt("Ingrese cantidad entre 0 y 1000"));
		} while (cantidad < 0 || cantidad > 1000);

		marca = prompt("Ingrese marca: ");
		fabricante = prompt("Ingrese fabricante: ");

		if ((tipo == "alcohol" && flagalc == 0) || (tipo == "alcohol" && precio < preciomenor)) {
			preciomenor = precio;
			cantidadalcohol = cantidad;
			fabricantealcohol = fabricante;
			flagalc = 1;
		}
		if (tipo == "jabon") {
			acujabones = cantidad + acujabones;
			contjabones++
		}
		else if (tipo == "alcohol") {
			acualcohol = cantidad + acualcohol;
			contalcohol++;
		}
		else if (tipo == "barbijo") {
			acubarbijo = cantidad + acubarbijo;
			contbarbijo++;
		}
	} //for

	if ((acujabones > acualcohol) && (acujabones > acubarbijo)) {
		tipomasunidades = "jabon";
		promedio = acujabones / contjabones;

	}
	if ((acualcohol > acujabones) && (acualcohol > acubarbijo)) {
		tipomasunidades = "alcohol";
		promedio = acualcohol / contalcohol;
	}
	else {
		tipomasunidades = "barbijo";
		promedio = acubarbijo / contbarbijo;
	}

	alert("Del alcohol más barato tiene " + cantidadalcohol + " unidades. El fabricante es " + fabricantealcohol);
	alert("tipo con más unidades: " + tipomasunidades + "/ El promedio es de " + promedio);
	alert("Cantidad de jabones en total: " + acujabones);

}
