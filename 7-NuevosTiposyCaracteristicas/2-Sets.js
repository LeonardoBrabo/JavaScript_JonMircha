const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"Hola","hola"]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2)

console.log("recorriendo set")
for (item of set){
    console.log(item)
}

console.log("recorriendo set2")
set2.forEach(item => console.log(item))

//accediendo a un elemento por su indice, transformandolo primeramente en un arreglo con from:

let arr = Array.from(set);

console.log(arr);
console.log(arr[9]); //ahora podemos acceder al contenido en el indice 9;

//ELIMINAR UN ELEMENTO DENTRO DEL SET.
set.delete("Hola");
console.log(set);

//MÉTODO HAS, COMPRUEBA SI ESE VALOR EXISTE DENTRO DE LA COLECCION DE DATOS:
console.log(set.has("hola"));
console.log(set.has(19));

//SI QUIERO LIMPIAR UN INTERABLE SET:

set2.clear();
console.log(set2);