function mostrar() {
	let vDestino;

	vDestino = document.getElementById("txtIdDestino").value;

	switch (vDestino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
		default:
			alert("Esta localidad no está contemplada");
			break;
	}

}//FIN DE LA FUNCIÓN