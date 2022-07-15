//parametro REST. es una forma de agregar parametros infinitos a funciones o variables.
// se los definen con ...NombreParametroRest (con tres puntos antes de su nombre)

function sumar(a,b,...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3)); //a partir del tercer valor, son valores que estoy dinamicamente creando
console.log(sumar(1,2,3,4,5,6));

//Spread Operator: para expandir un objeto iterable:

const arr1 = [1,2,3,4,5],
    arr2=[6,7,8,9,0];

console.log(arr1,arr2);

//creo un arreglo 3 apartir de los otros dos arreglos, que tenga una convinación de sus elementos.

const arr3 =[...arr1,...arr2]; //un solo arreglo con la convinación de los elementos de los otros 2.
console.log(arr3);

// const arr3 = [arr1,arr2] //esto no es lo mismo, sino que tiene dos arreglos en dos posiciones.

