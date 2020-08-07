/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let numSecreto = 0;

function comenzar() {
  let flag = 0;
  if (flag == 0) {
    numSecreto = Math.floor(Math.random() * 100) + 1;
    alert("Comenzó el juego, intente adivinar el número secreto!")
    flag = flag + 1
  }
}

function verificar() {
  let num;
  let contadorIntentos = 0;

  num = parseInt(document.getElementById("txtIdNumero").value);

  if (num >= 0 || num <= 100) {

    contadorIntentos++;

    if (num < numSecreto) {
      alert("Falta para el número secreto... ");
      
    }
    else if (num > numSecreto) {

      alert("Se pasó del número secreto...");

    }

    else if (num == numSecreto) {
      alert("Usted es un/a ganador/a!!! Adivinó en sólo  " + contadorIntentos + " intentos.");

    }
    document.getElementById("txtIdIntentos").value = contadorIntentos
  }
}




