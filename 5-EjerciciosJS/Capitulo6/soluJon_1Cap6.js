// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarletras = (cadena = "")=>{

    if(cadena === "") return console.warn("No ingreso ninguna cadena de texto");
    if(typeof cadena !== "string") return console.error("lo que ingreso no es un texto");

    let vocales = 0, consonantes = 0;

    for(let letra of cadena){
        if(/[aeiouáéíóú]/i.test(letra)) vocales++;

        if(/[qwrtypsdfghjklñzxcvbnm]/i.test(letra)) consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

contarletras("Hola mundo");