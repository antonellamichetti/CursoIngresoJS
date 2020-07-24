function mostrar()
{
	let vEdad;
	vEdad = parseInt (document.getElementById("txtIdEdad").value);
	
	if (vEdad < 13) 
	{
		alert("Es niño");
	}
	 else if (vEdad >= 13 && vEdad < 18 )
		{
			alert ("Es adolescente");
		}
		else 
		{
			alert ("Es mayor");
		}

}//FIN DE LA FUNCIÓN