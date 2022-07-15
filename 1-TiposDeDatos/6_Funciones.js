/*Una función es un bloque de código,
autocontenido, que se puede definir una vez
y ejecutar en cualquier momento
Opcionalmente, una función puede aceptar parámetros y devolver un valor

Las funciones en JavaScript son objetos, un tipo especial de objetos

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor
y pueden pasarse como argumentos y usarse como un valor de retorno

*/

//Funcion Declarada

function estoEsUnaFuncion(){
    console.log("U1");
    console.log("Do2");
    console.log("Tre3");
}

//Invocando una función

estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

//Funcion de devuelve un valor

function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una Cadena de Texto";
}

let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

//cuando la función encuentra la palabra reservada dentro de su bloque, ejecuta todo o que esta antes, pero no lo que esta despues
function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    return 18;
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una Cadena de Texto";
}

//Función que puede recibir parametros:
function saludar(nombre,edad){
    console.log(`Hola mi nombres es ${nombre} y tengo ${edad} años`);

}

//ejecución de una funcion a la que se le pasa parametros
saludar("Pepito",8);

// que pasa si la ejecutamos sin pasar parametros ?
saludar();

/*
Asignando valores por defecto, a los parametros por si no le pasan ningun valor
function saludar(nombre = "Desconocido",edad = 0){
    console.log(`Hola mi nombres es ${nombre} y tengo ${edad} años`);

}
//al ejecutarlo ahora, nos mostrara la ejecución del codigo junto a los valores por defecto
saludar();
 */

// Funciones Declaradas VS Expresadas:

//Funciones Declaradas

funcionDeclarada(); //Se ejecuta porque JS la eleva a la funcion en el ambito de mayor nivel, pudiendo ejecutarse a pesar de estar declarada luego de ejecutarse

function funcionDeclarada(){
console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
}

//Funciones Expresadas:

//se acostumbra a utilizar const cuando hacemos funciones expresadas

// en este caso ya no es necesario asignarle un nombre a la funcion porque su nombre es la de la constante
// es una funcion anonima


const funcionExpresada = function(){ 
    console.log("Esto es una función expresada es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dira 'Cannot access before initialization' ");
} 

funcionExpresada();