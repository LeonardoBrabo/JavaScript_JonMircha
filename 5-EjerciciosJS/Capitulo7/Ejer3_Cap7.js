// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objetoParesImpares = (arreglo = undefined)=>{
    if(arreglo === undefined) return console.warn("No ingreso ningun arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo está vacio");
    if(!(arreglo instanceof Array)) return console.error("lo que ingreso no es un arreglo");
    for(let element of arreglo){    //controla que todos los elementos sean de tipo numerico.
        if (typeof element !== "number"){
            return console.error(`El elemento "${element}" no es de tipo numerico, No es valido el procedimiento`);
        }
    }

    const pares = [], impares = [];

    for(element of arreglo){
        if(element % 2 === 0){
            pares.push(element)
        }else{
            impares.push(element);
        }
    }

    const miObjeto = {
        pares:  pares,
        impares: impares
    }

    return console.log(miObjeto);

}

objetoParesImpares();
objetoParesImpares("sdfrsadf");
objetoParesImpares([]);
objetoParesImpares([1,2,3,4,5,6,7,"8",9,0]);
objetoParesImpares([1,2,3,4,5,6,7,8,9,0]);