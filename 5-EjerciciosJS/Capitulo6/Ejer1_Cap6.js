// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocalesConsonantes = (cadena=undefined)=>{

    if(cadena === undefined) return console.warn("No ingreso ninguna cadena de texto");
    if(typeof cadena !== "string") return console.error("lo que ingreso no es un texto");


    const vocalesReg = /a|e|i|o|u/i, consoReg = /[^aeiou\W\d]/i
    let contvoc = 0, contcons = 0;
    for( let i= 0; i< cadena.length;i++){
        
        if(vocalesReg.test(cadena[i])){
            contvoc++;
        }else if(consoReg.test(cadena[i])){
            contcons++;
        }
        
    }
    return console.log(`Vocales: ${contvoc}, Consonantes: ${contcons}.`);

}

vocalesConsonantes();
vocalesConsonantes(123412);
vocalesConsonantes("aeiou 123 !@%&");
vocalesConsonantes("q w r a t");
vocalesConsonantes("Hola mundo");