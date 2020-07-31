function mostrar()
{
	let vMes;
	 vMes = document.getElementById("txtIdMes").value;

switch (vMes)
{
case "Febrero":
	alert ("Este mes no tiene más de 29 días");
	break;
default:
	alert ("Este mes tiene 30 o más días");
	break;
}
	/*if (vMes == "Febrero")
	{
	alert ("Este mes no tiene más de 29 días"); 
	}
	else 
	{
		alert ("Este mes tiene 30 o más días")
	}
	
	
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	*/


}//FIN DE LA FUNCIÓN