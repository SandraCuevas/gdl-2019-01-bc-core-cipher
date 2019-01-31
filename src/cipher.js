window.cipher ={

encode (offset, msgInput){
//declaro el alfabeto
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //para saber el largo del alfabeto
  let alphabetSize = alphabet.length;
  //aquí se va ir generarndo el mensaje codificado
  let msgEncode='';
  //para codificar el mensaje que ingresa el usuario
  //donde i=0 es la posición de inicio, i es el lugar donde se encuentra
  for (let i=0; i<= msgInput.lenght-1; i++);
  if (msgInput[1]==''){
    msgEncode += '';

  let position = (msgInput.charCodeAt(i)-'A'.charCodeAt(0)+offset)%alphabetSize;
  msgEncode += alphabet[position];
    }
return msgEncode;

},

decode (offset, msgInput){
   //declaro el alfabeto
     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     //para saber el largo del alfabeto
     let alphabetSize = alphabet.length;
     //aquí se va ir generarndo el mensaje codificado
     let msgEncode='';

     //para codificar el mensaje que ingresa el usuario
     //donde i=0 es la posición de inicio, i es el lugar donde se encuentra
     for (let i=0; i<= msgInput.lenght-1; i++);
     if (msgInput[1]==''){
       msgEncode += '';

     let position = (msgInput.charCodeAt(i)-'A'.charCodeAt(0)+offset)%alphabetSize;

     msgEncode += alphabet[position];
}
     }
   return msgEncode

      }
};
