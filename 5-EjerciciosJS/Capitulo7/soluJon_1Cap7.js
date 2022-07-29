// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingreso ningun arreglo");
    if(!(arr instanceof Array)) return console.error("lo que ingreso no es un arreglo");
    if(arr.length === 0) return console.warn("El arreglo está vacio");
    for (let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    const newArr =  arr.map(el=> el*el);

    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
    /* el método map() me permite generar un nuevo arreglo, a partir de uno original y a ese nuevo arreglo
    yo puedo hacerle las modificaciones necesarias, map() se utiliza mucho en frameworks reactivos */
}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados([]);
devolverCuadrados([1,"3",4,{}]);
devolverCuadrados([1,4,8]);


