
  const userName = prompt("¡Bienvenid@ a " + " 'LA CASA DE LOS SECRETOS' " + "Ingresa tu nombre para jugar:");

  const secretear = alert(userName + " Vamos a secretear!");



//aquí esta jalando los inputs del index html
function getInput (){
// msgInput jala el mensaje que ingresa el usuario, desde html
  const msgInput = document.getElementById('input').value;
  //jala el numero de posiciones que recorrera, desde el html
  const msgOffset = document.getElementById('claveCifrado').value;

  console.log(msgInput);
  console.log(msgOffset);
// jala la variable en donde se depositará el mensaje que ingresa el usuario, del cipher.js
    let msgEncode = encode(msgOffset, msgInput);


  console.log(msgEncode);

}
