// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const quitaPatrones = function(texto,patron){
    let nuevoTexto = texto.replace(/patron/g,"");
    console.log(nuevoTexto);
}


/*
1) buscar un método de string que detecte el patron ingresado, o la posicion de este

*/