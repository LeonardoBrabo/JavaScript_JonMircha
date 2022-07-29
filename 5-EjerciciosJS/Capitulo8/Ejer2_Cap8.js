// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


// Version 1: con un bucle for..of
const eliminarDuplicados = (arr= undefined)=>{
    const nuevoArreglo = [];
    for(let elemento of arr){
        if(!nuevoArreglo.includes(elemento)){
            nuevoArreglo.push(elemento);
        }
    }

    return console.log(`Arreglo ingresado: ${arr}\nArreglo sin duplicados: ${nuevoArreglo}`);
  
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


