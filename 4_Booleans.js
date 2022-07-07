let verdadero = true;  //aparecen de otro color porque son palabras reservadas
let falso = false;
let v = Boolean(true);  //definidas con el constructor.
let f = Boolean(false);

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0)); // tiende a falso
console.log(Boolean(-7)); // tiende a verdadero
console.log(Boolean("")); // tiende a falso (un espacio vacio)
console.log(Boolean(" ")); // tiende a verdadero. cualquier caracter(como el blanco) o conjunto de ellos


