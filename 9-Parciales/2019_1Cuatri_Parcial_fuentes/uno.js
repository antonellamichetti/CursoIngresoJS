
function mostrar()
{
let medidaLado;
let area;

medidaLado = prompt("Ingrese medida del lado del triángulo");
medidaLado = parseFloat(medidaLado);
area = ((medidaLado*medidaLado)*Math.cbrt(3))/4;

alert("el área es de: "+area.toFixed(2));

}
