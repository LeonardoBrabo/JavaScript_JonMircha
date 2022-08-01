// La Dirección MAC de una interfaz de red consiste en 6 números hexadecimales de dos dígitos separados por dos puntos.

// Por ejemplo: '01:32:54:67:89:AB'.

// Escriba una expresión regular que verifique si una cadena es una Dirección MAC.


let regexp = /^([a-f0-9]{2}:){5}[a-f0-9][a-f0-9]$/i;  //mi solución

console.log( regexp.test('01:32:54:67:89:AB') ); // true

console.log( regexp.test('0132546789AB') ); // false (sin dos puntos)

console.log( regexp.test('01:32:54:67:89') ); // false (5 números, necesita 6)

console.log( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ al final)

//solución libro: /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i

console.log("----------------------------------------------------------")
// ----------------------------------------------------------------------------------------------------------

// Escriba una expresión regular que haga coincidir los colores en el formato:
//  #abc o #abcdef. Esto es: # seguido por 3 o 6 dígitos hexadecimales.
// P.D. Esto debe ser exactamente 3 o 6 dígitos hexadecimales. Valores con 4 dígitos, tales como #abcd, no deben coincidir.

let regexp2 = /#([a-f0-9]{3}\b)|([a-f0-9]{6}\b)/ig; //mi solución

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(str.match(regexp2) ); // #3f3 #AA00ef

//solución libro: /#([a-f0-9]{3}){1,2}\b/gi

console.log("----------------------------------------------------------")
// ----------------------------------------------------------------------------------------------------------

//Escribe una expresión regular que busque todos los números decimales, incluidos los enteros,
//  con el punto flotante y los negativos.

let regexp3 = /[\-]?\d+([\.]\d)*/g;     //mi solución

let str2 = "-1.5 0 2 -123.4.";

console.log( str2.match(regexp3) ); // -1.5, 0, 2, -123.4

//solución libro: /-?\d+(\.\d+)?/g

console.log("----------------------------------------------------------")
