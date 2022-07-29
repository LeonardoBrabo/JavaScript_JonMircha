// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr= undefined) => {

    if(arr === undefined) return console.warn("No ingreso ningun arreglo");

    if(!(arr instanceof Array)) return console.error("lo que ingreso no es un arreglo");

    if(arr.length === 0) return console.warn("El arreglo está vacio");

    for (let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    //al método max o min del objeto Math, es necesario pasarle un spread operator (...arr)
    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`)


}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,3,{}]);
arrayMinMax([1, 4, 5, 99, -60]);


