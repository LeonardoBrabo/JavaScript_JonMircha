//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


const prompt = require('prompt-sync')(); //permite ingresar datos a la consola con node(se instala con npm)
function contCarac(cadena){
    
    console.log("el numero de caracteres del texto es: ",cadena.length);
}

contCarac(prompt("ingresa una cadena de texto:"));



// version sin length para practicar:
function Contar2(string){
    let cont = 0;
    for(let element of string){
        cont++;
    }   
   return "resultado de otra funcion:" + cont;
}

/*
for(let i = 0; i<string.length; i++){ //tiene length, genio...
        cont++
    }
*/

console.log(Contar2("FreeCodeCamp"));

