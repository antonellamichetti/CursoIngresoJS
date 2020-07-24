function mostrar()
{
	let vEstado;
	let vEdad;
	vEstado = document.getElementById ("estadoCivil").value;
	vEdad = parseInt (document.getElementById ("txtIdEdad").value);
	
	if ( vEdad < 18 && (vEstado == "Casado" || vEstado == "Divorciado") )
	
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	
	


}//FIN DE LA FUNCIÓN