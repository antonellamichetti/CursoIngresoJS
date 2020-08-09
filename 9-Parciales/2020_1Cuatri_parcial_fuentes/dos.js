function mostrar() {

  /*var tipo;//validad("arena";"cal";"cemento") 
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta;
  var acumuladorDeBolsas;
  var precioBrutoTotal;
  var precioBrutoProducto;
  var porcentaje;
  var descuento;
  var precioConDescuento;
  var acumuladorCal;
  var acumuladorCemento;
  var acumuladorArena;
  var tipoConMasUnidades;
  var banderaDelPrimerProducto;
  var tipoMasCaro;
  var tipoMasCaroPrecio;


  banderaDelPrimerProducto="es el primero";
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;

  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  respuesta="s";

  while(respuesta=="s")
  {

  	tipo=prompt("ingrese tipo");
  	while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
  	{
  		tipo=prompt("error, ingrese tipo");
  	}
  	cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
  	cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	while(cantidadDeBolsas<1)
  	{
  		cantidadDeBolsas=prompt("error ,ingrese cantidad de bolsas");
  		cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	}



  	precioPorBolsa=prompt("ingrese precio por bolsa");
  	precioPorBolsa=parseInt(precioPorBolsa);
  	while(precioPorBolsa<1)
  	{
  		precioPorBolsa=prompt("error ,ingrese precio por bolsa");
  		precioPorBolsa=parseInt(precioPorBolsa);
  	}

  	acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
  	precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
  	precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

  	if(banderaDelPrimerProducto=="es el primero")
  	{
  		banderaDelPrimerProducto="ya paso";
  		tipoMasCaro=tipo;
  		tipoMasCaroPrecio=precioPorBolsa;
  	}else
  	{
  		if(precioPorBolsa>tipoMasCaroPrecio)
  		{
  			tipoMasCaro=tipo;
  			tipoMasCaroPrecio=precioPorBolsa;
  		}
  	}


  	switch(tipo)
  	{
  		case "arena":
  			acumuladorArena=acumuladorArena+cantidadDeBolsas;
  			break;
  		case "cal":
  			acumuladorCal=acumuladorCal+cantidadDeBolsas;
  			break;
  		case "cemento":
  			acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
  			break;
  	}



  	respuesta=prompt("seguir ?")
  }//termine while ppal 

  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
  	//arena
  	tipoConMasUnidades="arena";
  }else
  {
  	if(acumuladorCal>acumuladorCemento)
  	{
  		tipoConMasUnidades="cal";
  	}else
  	{
  		tipoConMasUnidades="cemento";
  	}
  }




  if(acumuladorDeBolsas>30)
  {
  	porcentaje=25;

  }else
  {
  	if(acumuladorDeBolsas>10)
  	{
  		porcentaje=15;
  	}else
  	{
  		porcentaje=0;
  	}
  }





  if(porcentaje!=0)
  {
  	descuento=precioBrutoTotal*porcentaje/100;
  	precioConDescuento=precioBrutoTotal-descuento;
 	console.log("pagar con descuento: "+precioConDescuento);		
  }

 // El importe total a pagar , bruto sin descuento
 console.log("bruto sin descuento: "+precioBrutoTotal);
 console.log("el tipo mas comprado es: "+tipoConMasUnidades);
 console.log("el tipo mas caro  es: "+tipoMasCaro);*/

  let tipo;
  let cantidadDeBolsas = 0;
  let acuDeBolsas = 0;
  let precioPorBolsa;
  let precioBrutoPorBolsa;
  let precioBrutoTotal = 0;
  let respuesta = "s";
  let banderaPrimerProducto = 0;
  let tipoConMasBolsas;
  let precioMasCaro = 0;
  let tipoMasCaro;
  let acuArena = 0;
  let acuCemento = 0;
  let acuCal = 0;
  let descuento = 0;


  do {
    tipo = prompt("Ingrese tipo -cal/cemento/arena- ");
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Error, ingrese tipo -cal/cemento/arena- ");
    }
    cantidadDeBolsas = parseInt(prompt("Ingrese cantidad de bolsas: "));
    while (cantidadDeBolsas < 1) {
      cantidadDeBolsas = parseInt(prompt("Error, ingrese cantidad de bolsas: "));
    }
    precioPorBolsa = parseFloat(prompt("Ingrese precio de bolsa: "));
    while (precioPorBolsa <= 0) {
      precioPorBolsa = parseFloat(prompt("Error, ingrese precio de bolsa: "));
    }

    acuDeBolsas = acuDeBolsas + cantidadDeBolsas;
    precioBrutoPorBolsa = precioPorBolsa * cantidadDeBolsas;
    precioBrutoTotal = precioBrutoPorBolsa + precioBrutoTotal;

    if (banderaPrimerProducto == 0 || precioPorBolsa > precioMasCaro) {
      precioMasCaro = precioPorBolsa;
      tipoMasCaro = tipo;
      banderaPrimerProducto = 1;
    }

    switch (tipo) {
      case "arena":
        acuArena = acuArena + cantidadDeBolsas;
        break;
      case "cemento":
        acuCemento = acuCemento + cantidadDeBolsas;
        break;
      case "cal":
        acuCal = acuCal + cantidadDeBolsas;
        break;
    }

    respuesta = prompt("Desea continuar ingresando? s/n")
  } while (respuesta == "s");
  // fin del do

  if (acuArena > acuCal && acuArena > acuCemento) {
    tipoConMasBolsas = "Arena";
  }
  else if (acuCal > acuArena && acuCal > acuCemento) {
    tipoConMasBolsas = "Cal";
  }
  else {
    tipoConMasBolsas = "Cemento";
  }

  if (acuDeBolsas > 30) {
    descuento = 25;
  }
  else {
    if (acuDeBolsas > 10 && acuDeBolsas < 31) {
      descuento = 15;
    }
    else {
      descuento = 0;
    }
  }

  alert("El importe bruto a pagar es de $ " + precioBrutoTotal);
  if (descuento != 0) {
    alert("Importe a pagar bruto con descuento es de $ " + (precioBrutoTotal - (precioBrutoTotal * descuento / 100)));
  }
  alert("Tipo con más cantidad de bolsas: " + tipoConMasBolsas);
  alert("Tipo más caro: " + tipoMasCaro);
}
