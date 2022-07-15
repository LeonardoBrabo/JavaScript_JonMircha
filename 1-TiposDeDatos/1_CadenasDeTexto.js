//cadenas de texto
let nombre = "Leo";
let apellido = "Brabo";
let saludo = new String("Hola Mundo");
let frase = "   estaba la paloma blanca pincando el verde limon   ";

console.log(nombre,apellido,saludo);
//la propiedad lenght nos muestra  la longitud total de la cadena de texto
console.log(nombre.length, apellido.length, saludo.length); 
//el método to.UpperCase, cambia los caracteres a mayuscula
console.log(nombre.toUpperCase());
// el método toLowerCase, cambia los caracteres a minuscula.
console.log(apellido.toLowerCase());
// el método includes nos da un valor booleano, si dicho caracter o cadena se encuentra en el objeto string.
console.log(nombre.includes("e"));
// el método trim quita los espacios en blanco o caracteres alrededor del texto
console.log(frase.trim())
// el método split() convierte una cadena de texto en un arreglo/ array separados por el valor que le asignemos:
console.log(frase.split(" "));
//para sacar los espacios agregados intencionalmente al principio y al final y generar un arreglo:
console.log((frase.trim()).split(" ")); //vamoooooo!!!!!

