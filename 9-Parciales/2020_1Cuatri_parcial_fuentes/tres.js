function mostrar()
/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/ {
	let nombre;
	let edad;
	let sexo;
	let temperatura =0;
	let estadoCivil;
	let banderaTemperatura = 0;
	let promEdadSolteros;
	let respuesta = "s";
	let temperaturaMax;
	let nombreTempMax;
	let contadorMayoresViudos = 0;
	let contadorSolterosOviudos = 0;
	let contadorMayoresTemperatura = 0;
	let contadorSolteros = 0;
	let acuEdadSolteros = 0;

	do {
		nombre = prompt("Ingrese nombre: ");
		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);
		while (edad < 1) {
			edad = prompt("Error, ingrese edad: ");
			edad = parseInt(edad);
		}
		sexo = prompt("Ingrese sexo -f/m-");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error, ingrese sexo -f/m-");
		}
		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		//temperatura = parseFloat(temperatura);
		while (temperatura < 0 || temperatura > 45) {
			temperatura = prompt("Error, ingrese temperatura: ");
			temperatura = parseFloat(temperatura);
		}
		estadoCivil = prompt("Ingrese estado civil: ");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error, ingrese estado civil: ");
		}

		if (banderaTemperatura == 0 || temperatura > temperaturaMax) {
			temperaturaMax = temperatura;
			nombreTempMax = nombre;
			banderaTemperatura = 1;
		}
		
		
		if (edad >= 18 && estadoCivil == "viudo") {
			contadorMayoresViudos++;
		}
		if (edad > 60 && temperatura > 38) {
			contadorMayoresTemperatura++;
		}
		if (sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")) {
			contadorSolterosOviudos++;
		}
		if (sexo == "m" && estadoCivil == "soltero") {
			acuEdadSolteros = acuEdadSolteros + edad;
			contadorSolteros++;
		}
		respuesta = prompt("Desea continuar agregando pasajeros? s/n");
	} while (respuesta == "s");

	promEdadSolteros = acuEdadSolteros / contadorSolteros;

	alert("Nombre persona con más temperatura: " + nombreTempMax);
	alert("Cantidad de mayores de edad viudos: " + contadorMayoresViudos);
	alert("Cantidad de hombres solteros o viudos: " + contadorSolterosOviudos);
	alert("Cantidad de personas de la 3ra edad con temp. mayor a 38: " + contadorMayoresTemperatura);
	alert("Promedio edad solteros: " + promEdadSolteros);

}
