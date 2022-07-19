//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const prompt = require('prompt-sync')()

//Version 1:
function transformar(string,caracter){
    return string.split(caracter);
}

console.log(transformar("Este, es un string separado cada, palabra en un arreglo",","));

/*El método split usado con los string, tranforma en un arreglo la cadena y separa en cada posición segun el al argumento ingresado
este separara en las posiciones del arreglo segun el caracter que esté presente en en string, por ejemplo si ingresas que esté separado
por los espacios que hay entre palabras, cada posicion del arreglo tendrá una palabra, y eliminará los espacios, en cambio si pones de argumento
una coma, y en el string no hay comas que separen el texto, la cadena se situara como un solo elemento del arreglo.*/

//Version 2: con arrow function e ingresando por consola los valores
const MyFun = (string,caracter) => string.split(caracter); 

let cad = prompt("Ingrese una cadena de texto: ");
let c = prompt("Ingrese un caracter por el cual quiere separar su arreglo: ");
console.log("Su arreglo quedo:",MyFun(cad,c));

