function mostrar() {
	let vDestino;
	let vEstacion;
	let vPrecioBase;
	let vPrecioFinal;
	vDestino = document.getElementById("txtIdDestino").value;
	vEstacion = document.getElementById("txtIdEstacion").value;
	vPrecioBase = 15000;


	switch (vEstacion) {
		case "Invierno":
			if (vDestino == "Bariloche") {
				vPrecioFinal = vPrecioBase * 1.20;
			}
			else if (vDestino == "Cordoba" || vDestino == "Cataratas") {
				vPrecioFinal = vPrecioBase * 0.90;
			}
			else if (vDestino == "Mar del plata") {
				vPrecioFinal = vPrecioBase * 0.80;
			}
			break;
		case "Verano":
			if (vDestino == "Bariloche") {
				vPrecioFinal = vPrecioBase * 0.80;
			}
			else if (vDestino == "Cordoba" || vDestino == "Cataratas") {
				vPrecioFinal = vPrecioBase * 1.10;
			}
			else if (vDestino == "Mar del plata") {
				vPrecioFinal = vPrecioBase * 1.20;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (vDestino == "Bariloche" || vDestino == "Cataratas" || vDestino == "Mar del plata") {
				vPrecioFinal = vPrecioBase * 1.10;
			}
			else if (vDestino == "Cordoba") {
				vPrecioFinal = vPrecioBase;
			}
			break;
		default:
			alert("La localidad no está contemplada")
	}

	alert("La tarifa del viaje es de $" + vPrecioFinal)

}//FIN DE LA FUNCIÓN