//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena ="") =>
    (!cadena)
        ? console.log("No ingresaste una cadena texto")
        : console.log(cadena.split("").reverse().join(""));
    
    invertirCadena();
    invertirCadena("Hola mundo");