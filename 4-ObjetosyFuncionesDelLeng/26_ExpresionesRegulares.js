
let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/*
El constructor RegExp recibe dos parametros, el primero hace referencia al patron que quieres
buscar y luego las banderas,
Que son las banderas:
son comodines que me van a permit realizar modificaciónes a nuestra expresion regular:*/
let expReg = new RegExp("Lorem","ig");


// bandera i ignora si es mayuscula o minuscula
// la bandera g  significa que busque todas las concidencias no la primera en encontrar unicamente


//otra manera de ejecutar una expresion regular:
let expReg2 = /lorem/;
// en este caso las banderas se agregan seguido de la ultima barra /lorem/ig
// esta segunda expresion es la más utilizada.



//como puedo hacer que JS valide este patron, es decir que la encuentre dentro de la cadena de texto:
// uno es el método test() y otro es exec()

//metodo test() no dice si existe la palabra en la cadena de texto
console.log(expReg.test(cadena)); 

//metodo exec() te devuelve un arreglo
console.log(expReg.exec(cadena));
/*obtenemos en que indice se encontre la palabra en el arreglo
nos muestra cual es la cadena de texto*/ 