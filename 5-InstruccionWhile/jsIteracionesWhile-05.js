/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	do {
		sexo = prompt ("ingrese f ó m .");
	} while (!(sexo == "f" || sexo == "m"))
	
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN