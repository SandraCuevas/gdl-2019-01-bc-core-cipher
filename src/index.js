
//const userName = prompt("¡Bienvenid@ a " + " 'LA CASA DE LOS SECRETOS' " + "Ingresa tu nombre para jugar:");

//const secretear = alert(userName + " vamos a secretear!");



//aquí esta jalando los inputs del index html



function getInputEncode (){

  const msgInput = document.getElementById('input').value;
  const msgOffset = parseInt(document.getElementById('claveCifrado').value);
  let msgCodificado = window.cipher.encode(msgOffset, msgInput);
  document.getElementById ('output').innerHTML = msgCodificado;

}
document.getElementById('bEncode').addEventListener('click',getInputEncode);



function getInputDecode (){

  const msgInput = document.getElementById('input').value;
  const msgOffset = parseInt(document.getElementById('claveCifrado').value);
  let msgDecodificado = window.cipher.decode(msgOffset, msgInput);
  document.getElementById ('output').innerHTML = msgDecodificado;

}

document.getElementById('bDecode').addEventListener('click',getInputDecode);
