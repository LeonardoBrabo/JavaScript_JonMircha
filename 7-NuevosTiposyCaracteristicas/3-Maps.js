let mapa = new Map();

mapa.set("nombre","Jon");
mapa.set("Apellido","Mircha");
mapa.set("edad",35);

console.log(mapa)

//para ver cuantos elementos tiene el map:
console.log(mapa.size);

//para ver si existe una key:
console.log(mapa.has("nombre"));

//recuperar el valor de una llave
console.log(mapa.get("nombre"));

//reescribir el valor de una llave:
mapa.set("nombre","Jonathan Mircha");

console.log(mapa.get("nombre"));

//eliminamos una propiedad:

mapa.delete("Apellido");
console.log(mapa);

//recorremos un map con for of:

for(let [key,value] of mapa){
    console.log(`LLave: ${key}, Valor: ${value}`);
}

let palabra = "Panda"
const arr = palabra.split("");
console.log(arr instanceof Array);
console.log(arr)

const arr2 = Array.from(palabra);
console.log( arr2 instanceof Array);
console.log(arr2);
