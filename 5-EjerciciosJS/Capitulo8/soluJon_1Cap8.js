// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingreso ningun arreglo");
    if(arr.length === 0) return console.warn("El arreglo está vacio");
    if(!(arr instanceof Array)) return console.error("lo que ingreso no es un arreglo");
    for(let element of arr){    //controla que todos los elementos sean de tipo numerico.
        if (typeof element !== "number"){
            return console.error(`El elemento "${element}" no es de tipo numerico, No es valido el procedimiento`);
        }
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort((a,b)=> a - b),
        desc:arr.map(el => el).sort((a,b)=> a - b).reverse()
    });

    //tambien con el spread operator y sort() se puede   [...array].sort(( a, b) => a - b);
    
}

ordenarArreglo();
ordenarArreglo("hola");
ordenarArreglo([]);
ordenarArreglo([1,true]);
ordenarArreglo([7,5,7,8,6]);
