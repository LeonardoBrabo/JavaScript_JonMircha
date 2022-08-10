//iterables:

const iterable = [1,2,3,4,5];
// const iterable = "Hola Mundo";
// const iterable = new Set([1,2,3,4,5]);
// const iterable = new Map([["nombre","Jon"],["edad",35]]);

//accedemos al iterador de nuestro iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

//metodo especial que tiene el iterador llamado next();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();
 
while(!(next.done)){
    console.log(next.value);
    next = iterador.next();
}
