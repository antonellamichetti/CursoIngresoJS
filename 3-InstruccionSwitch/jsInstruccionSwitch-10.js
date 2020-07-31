function mostrar() {
	let vDestino;
	let vEstacion;
	vDestino = document.getElementById("txtIdDestino").value;
	vEstacion = document.getElementById("txtIdEstacion").value;

	switch (vEstacion) {
		case "Invierno":
			if (vDestino == "Bariloche") {
				alert("Se viaja");
			}
			else if (vDestino != "Bariloche") {
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (vDestino == "Mar del plata" || vDestino == "Cataratas") {
				alert("Se viaja");
			}
			else if (vDestino == "Cordoba" || vDestino == "Bariloche") {
				alert("No se viaja");
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			if (vDestino != "Bariloche") {
				alert("Se viaja");
			}
			else if (vDestino == "Bariloche") {
				alert("No se viaja");
			}
			break;
		default:
			alert("Estación no contemplada");
			break;
	}



}//FIN DE LA FUNCIÓN