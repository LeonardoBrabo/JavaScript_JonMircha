//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/*
    sin expresiones regulares:
    métodos a utilizar:
    1) indexOf() =>  me pernmite buscar un texto dentro de otra cadena de texto, y me devuelve la posicion
        en la que se encuentra ese texto o caracter. si no encuentra el texto o caracter devuelve -1
*/

const textoEnCadena = (cadena = "",texto="") =>{

    if(!cadena) return console.log("No ingresaste el texto largo");
    if(!texto) return console.log("No ingresaste la palabra a buscar");

    let i = 0,
    contador = 0;

    while(i !== -1){
        i= cadena.indexOf(texto,i);
        if( i !== -1 ){
            i++;
            contador++;
        }
    }
    return console.log(`la palabra ${texto} se repite ${contador} veces`);
}

 textoEnCadena();
 textoEnCadena("hola hola");
 textoEnCadena("Hola mundo adios mundo","mundo");
