  window.cipher ={

    encode: function (offset, msgInput){
        let msgEncode='';
       //declaro el alfabeto
         let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         //para saber el largo del alfabeto
         let cuantasLetras = letras.length;

         //para codificar el mensaje que ingresa el usuario
         //donde i=0 es la posición de inicio, i es el lugar donde se encuentra
         //console.log(`La condición Inicial es:  ${0<= msgInput.length-1}`);
         for (let i=0; i< msgInput.length; i++){
           //console.log(`En la iteración ${i}   msgInput:  ${msgInput}`);
           if (msgInput[i] == ' '){
             msgEncode += ' ';
           }
           else {
             let poSwitch = (msgInput.charCodeAt(i)-'A'.charCodeAt(0)+offset)%cuantasLetras;
             msgEncode += letras[poSwitch];
         }
           //console.log('encode',msgEncode);
         }
         return msgEncode;
       },

       decode: function (offset, msgInput){
           let msgDecode='';
          //declaro el alfabeto
            let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            //para saber el largo del alfabeto
            let cuantasLetras = letras.length;

            //para codificar el mensaje que ingresa el usuario
            //donde i=0 es la posición de inicio, i es el lugar donde se encuentra
            //console.log(`La condición Inicial es:  ${0<= msgInput.length-1}`);
            for (let i=0; i< msgInput.length; i++){
              //console.log(`En la iteración ${i}   msgInput:  ${msgInput}`);
              if (msgInput[i]==' '){
                msgDecode += ' ';
              }
              else {
              let poSwitch = (msgInput.charCodeAt(i)-'A'.charCodeAt(0)-offset)%cuantasLetras;
              msgDecode += letras[poSwitch];
              //console.log('encode',msgEncode);
            }
            }
            return msgDecode;
          }


}
