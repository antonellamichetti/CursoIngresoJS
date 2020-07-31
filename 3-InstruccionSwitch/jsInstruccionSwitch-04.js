function mostrar()
{
	let vMes;
	 vMes = document.getElementById("txtIdMes").value;

	 switch (vMes)
	 {
		case "Febrero":
			alert ("el mes seleccionado tiene 28 días");
			break;
		case "Enero":	
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":	
		case "Diciembre":
			alert ("el mes seleccionado tiene 31 días");
			break;
			default:
				alert ("el mes seleccionado tiene 30 días");
			break;
		/*case "Abril":
		case "Junio":			
		case "Septiembre":
		case "Noviembre":*/	
	 }
	
	/*//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);*/
	
	



}//FIN DE LA FUNCIÓN