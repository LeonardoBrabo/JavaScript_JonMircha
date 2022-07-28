// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const  cuadradoArray = (arreglo=undefined)=>{
    
    if(arreglo === undefined) return console.warn("No ingreso ningun arreglo");
    if(arreglo.length === 0) return console.warn("El arreglo está vacio");
    if(!(arreglo instanceof Array)) return console.error("lo que ingreso no es un arreglo");
    for(let element of arreglo){    //controla que todos los elementos sean de tipo numerico.
        if (typeof element !== "number"){
            return console.error(`El elemento "${element}" no es de tipo numerico, No es valido el procedimiento`);
        }
    }

    const nuevoArreglo = [];
    for (let elemento of arreglo){
        nuevoArreglo.push(elemento**2)
    }
    return console.log(arreglo,": al cuadrado =",nuevoArreglo);

}

cuadradoArray();
cuadradoArray("34,5,3");
cuadradoArray({});
cuadradoArray([2,"hola",6]);
cuadradoArray([]);
cuadradoArray([2,5,6]);
cuadradoArray([10,3,4,8,2,5]);