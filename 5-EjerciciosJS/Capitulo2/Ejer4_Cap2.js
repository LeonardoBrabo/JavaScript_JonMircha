// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// Version 1: con expresiones regulares:
const quitaPatrones = function(texto,patron){
    let re = new RegExp(patron,'g')
    // let nuevoTexto = texto.replace(/patron/g,""); //no toma la variable de está forma.
    console.log(texto.replace(re,""));
}

quitaPatrones("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");

// Version 2: sin expresiones regulares: Kamikaze pensamiento con doble for:

