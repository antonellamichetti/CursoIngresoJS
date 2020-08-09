function mostrar() {
    /*Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
    la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de temperaturas pares.
    b) El nombre del pais con menos habitantes
    c) la cantidad de paises que superan los 40 grados.
    d) el promedio de habitantes entre los paises ingresados
    f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
    */

    let pais;
    let respuesta = "s";
    let habitantes;
    let tempMinima;
    let contadorTempPares = 0;
    let banderaPrimerPais = 0;
    let menosCantHabib;
    let paisMenosHab;
    let cantPaisesTemp = 0;
    let cantPaises = 0;
    let promedioHab;
    let acuHabitantes = 0;
    let banderaTemp = 0;
    let menorTemp;
    let paisTempBaja;

    do {
        pais = prompt("Ingrese país: ");
        habitantes = prompt("Ingrese número de millones de habitantes: ");
        habitantes = parseFloat(habitantes);
        while (habitantes < 1 || habitantes > 7000) {
            habitantes = prompt("Error, ingrese número de millones de habitantes: ");
            habitantes = parseFloat(habitantes);
        }
        acuHabitantes = acuHabitantes + habitantes;
        tempMinima = prompt("Ingrese temperatura mínima: ");
        tempMinima = parseFloat(tempMinima);
        while (tempMinima < -50 || tempMinima > 50) {
            tempMinima = prompt("Error, ingrese temperatura mínima: ");
            tempMinima = parseFloat(tempMinima);
        }
        if (tempMinima % 2 == 0) {
            contadorTempPares++;
        }

        if (banderaPrimerPais == 0 || habitantes < menosCantHabib) {
            menosCantHabib = habitantes;
            paisMenosHab = pais;
            banderaPrimerPais = 1;
        }
        if (tempMinima > 40) {
            cantPaisesTemp++;
        }

        if (banderaTemp == 0 || tempMinima < menorTemp) {
            menorTemp = tempMinima;
            paisTempBaja = pais;
            banderaTemp = 1;
        }
        cantPaises++;   
        respuesta = prompt("Desea continuar ingresando? s/n")
    } while (respuesta == "s");
    promedioHab = acuHabitantes / cantPaises;

    document.write("Cantidad de temperaturas pares: "+contadorTempPares +"<br>");
    document.write("Nombre de pais con menos habitantes: "+paisMenosHab+"<br>");
    document.write("Cantidad de paises con más 40 grados: "+cantPaisesTemp+"<br>" );
    document.write("Promedio de habitantes: "+promedioHab+"<br>");
    document.write("Temperatura mínima ingresada: "+menorTemp+ " del pais: "+paisTempBaja+"<br>");
}
