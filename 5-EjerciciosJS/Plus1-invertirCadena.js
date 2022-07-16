const letras = ["a","b","c"];
console.log(letras.reverse().join("")); // el método join(une el contenido de un arreglo en un string separados por el argumento ingresado.)

let palabra = "metamorfósis";
console.log(palabra.split("").reverse().join(""));

/*método split(): convierte en un arreglo el string, sin agregar parametros agrega todo el string como un solo elemento, con el argumento
    ("") , le digo que separe cada letra en una posicion.
método reverse(): permite cambiar el orden de los elemento de un arreglo (solo de un arreglo no de un string)
método join(); agrega el contenido de un arreglo a un string, con el argumento (""), nos elementos se unen entre si.
*/


//probando con recursividad:
//(proximamente);