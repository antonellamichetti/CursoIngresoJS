function mostrar()
{
	let vEstado;
	let vEdad;
	vEstado = document.getElementById ("estadoCivil").value;
	vEdad = parseInt (document.getElementById ("txtIdEdad").value);
	
	if ( vEdad >= 18 && vEstado == "Soltero" )
	
	{
		alert("Es soltero y no es menor");
	}
/* if  (! (vEdad < 18 || vEstado != Soltero) ) */
}//FIN DE LA FUNCIÓN