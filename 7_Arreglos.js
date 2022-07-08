const a = [] //arreglo vacio
//pueden estar compuesto de cualquier tipo de elementos.
const b = [1,true,"hola",["A","B","C",[1,2,3]]];


console.log(a);
console.log(b);

//Con el método length podemos ver cuantos elementos tiene un arreglo:
console.log(b.length);

// podemos ingresar al contenido de una posición especifica dentro del arreglo, es decir a un elemento particular
console.log(b[3]);
//el indice de posicion de los elemento de un arreglo comienza contando desde cero 0
//Por ejemplo el elemento numero 3 está en la posicion 2, o el elemento 1 en la posicion 0.

//también podemos acceder a elementos epecificos de arreglos dentro del arreglos

console.log(b[3][1]);   // muestra en consola : B
console.log(b[3][3][0]); // muestra en consola : 1


// nuevas formas de crear un arreglo

const c = Array.of("X","Y","Z",9,8,7);  //nuevo metodo de ES6 para crear arreglos Array.of : nos permite llenar elementos
console.log(c);

//Iniciarlizar un arreglo de un tamañano, y asignarles a todas sus posiciones por defecto un valor con .fill()

const d = Array(100).fill(true);
console.log(d);

// Otras maneras antiguas de utilizar el constructor de los arreglos, ya no se utilizan tanto, para declarar un arreglo.


const e = new Array();
console.log(e);

const f = new Array(1,2,3,true,false,'ya no se usa mucho');
console.log(f);

// Algunos métodos de arreglos:


// el metodo .push() para agregar un elemento al final del arreglo
const colores = ["rojo","verde","azul"];
console.log(colores)
colores.push("morado");
console.log(colores);

//el metodo .pop() para quitar el ultimo elemento de un arreglo.
colores.pop();
console.log(colores);

/*los arreglos tienen muchisimos métodos para utilizar, sobre todo con el paradigmas funcional orientado a componentes
esto a traído muchos más metodos, y para concerlos es necesario verlos en la documentacion MDN (+20 metodos y arreglos) */


//metodo ForEach:  este método nos permite ejecutar una función por cada elemento que tenga el arreglo

// se le pasa como parametro el elemento que se está recorriendo en la posicion del arreglo
colores.forEach(function(element){
    console.log(`<li>${element}</li>`); // interpolamos lo que tiene el arreglo cada elemento dentro de un <li>
})

// ahora imaginate que estos li necesitan un id, pdemos pasarle un segundo parametro al método forEach que indica el indice de ese elemento ocupa dentro del arreglo

colores.forEach(function(element,index){
    console.log(`<li id="${index}">${element}</li>`); // interpolamos lo que tiene el arreglo cada elemento dentro de un <li>
})