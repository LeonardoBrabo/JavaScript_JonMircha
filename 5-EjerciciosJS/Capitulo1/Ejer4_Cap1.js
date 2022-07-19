//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//Versión 1: creo un arreglo con la cantidad de copias y luego lo convierto en un string nuevamente.
function RepTexto(string,cantrep){
    const arr = string.split();

    for(let i= 1; i < cantrep;i++){

        arr.push(string.split());
    }

    console.log(arr.join(" "));
}
RepTexto("hola Mundo.",0)

//Version 2: repito el string con el método .repeat, separando con un espacio concatenado.

const RepOp = (string,cantrep) => console.log((string + " ").repeat(cantrep)); //le agrego un blanco porque el Método "repeat" no lo separa

RepOp("HOLA MUNDO ",2);
