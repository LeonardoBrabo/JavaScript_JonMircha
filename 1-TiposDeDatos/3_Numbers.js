// el tipo de dato Number es tambien un objeto con sus propieades y Métodos.

let a = 2;
let b = new Number(1); //ejecutado con su constructor
let c = 7.19;
let d = "5.6";

console.log(a,b);

//Método toFixed nos permite elegir la cantidad de numero de decimales a mostrar. (Tambien redondea)
//hoy en día ya se utilizan librerias que se encargan de esto.
console.log(c.toFixed(1));
console.log(c.toFixed(5));

//el método parseInt: nos devuelve solo la parte entera de un numero.
//puede recibir tanto un string como un number.

console.log(parseInt(c)); // imprime solo la parte entera del numero.
console.log(parseFloat(c)); //imprime tanto la parte entera como la parte flotante

//con el operador typeof nombreVariable. Podemos ver de que tipo de datos es la variable

console.log(typeof c, typeof d);

//cuando intentamos sumar c "tipo number" y d "tipo string" lo que realmente tenemos en este caso es una concatenación:
console.log(c + d);

/*si yo quiero realizar una operacion aritmetica con un numero que es ingresado como tipo de dato string, debo primero convertirlo
lo que en programación se conoce como hacer un "casting" es decir un cambio de tipo de dato.
*/

console.log(c + parseInt(d));

//solo suma la parte entera de la variable d
/*como resultado en consola nos dara 12.190000000000001 
esto es porque JavaSript es un lenguaje que cuando trabajo con operaciones con decimales hay ciertos problemas
porque como js no tiene tantos tipos de datos como otros lenguajes ocurren ciertas falencias con respecto a los numeros
es la parte debil que tienen js con los numeros, si están haciendo una aplicacion que necesita muchos calculos numericos
se sugiere que uses librerias optimizadas para resolver estos problemas.*/


//Para obtener el resultado correcto utilizamos parseFloat() para que tome tambien la parte decimal del numero y operar:

console.log(c + parseFloat(d));


/*¿Porque el metodo toFixed se ejecuta como nombreVariable.toFixed y  el metodo parseInt/parseFloat se ejecuta con la forma
parseInt(nombreVariable) ? 

Esto es porque los métodos parseInt/parseFloat cuelgan del constructor de los numeros es decir es un método que depende de un contructor: 
Number es como si estuviera definido como Number.parseInt(d) pero Js lo toma sin necesidad de escribir el constructor de ante mano. */
