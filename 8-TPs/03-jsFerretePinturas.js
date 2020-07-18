/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var vTemperatura;
    var vResult;
    vTemperatura = parseFloat (document.getElementById("txtIdTemperatura").value);
    vResult = (vTemperatura-32)/1.8;
    alert (vTemperatura+" Fahrenheit son "+vResult.toFixed(2)+" centígrados");
}

function CentigradosFahrenheit () 
{
	var vTemperatura;
    var vResult;
    vTemperatura = parseFloat (document.getElementById("txtIdTemperatura").value);
    vResult = vTemperatura*1.8+32;
    alert (vTemperatura+" centígrados son "+vResult.toFixed(2)+" Fahrenheit");
}
