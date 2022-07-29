// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr= undefined) => {

    if(arr === undefined) return console.warn("No ingreso ningun arreglo");

    if(arr.length === 0) return console.warn("El arreglo está vacio");

    if(arr.length === 1) return console.warn("el arreglo debe tener al menos 2 elementos")

    if(!(arr instanceof Array)) return console.error("lo que ingreso no es un arreglo");


    //version 1: con filter() e indexOf()
    
    // return console.info({
    //     original: arr,
    //     sinDuplicados: arr.filter((value,index,self)=>self.indexOf(value) === index)
    // })

    //version 2 con  set()

    return console.info({
        original: arr,
        sinDuplicados: [...new Set(arr)]
    })

}

quitarDuplicados([5]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);




