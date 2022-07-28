// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numAltoBajo = (arreglo= undefined)=>{

    if(arreglo === undefined) return console.warn("No ingreso ningun arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo está vacio");
    if(!(arreglo instanceof Array)) return console.error("lo que ingreso no es un arreglo");
    for(let element of arreglo){    //controla que todos los elementos sean de tipo numerico.
        if (typeof element !== "number"){
            return console.error(`El elemento "${element}" no es de tipo numerico, No es valido el procedimiento`);
        }
    }

    let alto = arreglo[0], bajo = arreglo[0];
    
    for(let i= 0; i < arreglo.length; i++){

        if(arreglo[i] > alto){
            alto = arreglo[i];
        }
        if(arreglo[i] < bajo){
            bajo = arreglo[i];
        }
       
    }
    return console.log(`Mas alto: ${alto} - Mas bajo: ${bajo}`)
}

numAltoBajo();
numAltoBajo(123412);
numAltoBajo([]);
numAltoBajo([1,[2]]);
numAltoBajo([1, 4, 5, 99, -60]);
numAltoBajo([-8, -146, -1, -33, -60]);
numAltoBajo([23.6,23.5,74.2]);








