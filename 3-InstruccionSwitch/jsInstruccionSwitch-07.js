function mostrar() {
	let vDestino;

	vDestino = document.getElementById("txtIdDestino").value;

	switch (vDestino) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		default:
			alert ("Esta localidad no está contemplada");
			break;
	}

	/*var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);*/

}//FIN DE LA FUNCIÓN