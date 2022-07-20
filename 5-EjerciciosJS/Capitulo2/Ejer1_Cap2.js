//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

    //version 1 con For
    function InvertirCadena(cadena){
        let nuevaCadena = "";
        for (let i= cadena.length -1; i >=0; i--){
            nuevaCadena += cadena[i];   
        }
        return console.log(nuevaCadena);
    }
    InvertirCadena("Hola mundo");

    //verions 2 Con métodos

    const InvertirCadena2 = (cadena=undefined) => 
        (cadena === undefined)
            ? console.log("No ingreso ninguna texto")
            : (typeof cadena !== "string")
                ? console.log("Ingreso algo distinto a un texto")
                : console.log(cadena.split("").reverse().join(""));

            InvertirCadena2("Hola");

