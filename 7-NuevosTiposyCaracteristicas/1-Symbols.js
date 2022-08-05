let prueba1 = "Mundo"

let prueba2 = "Mundo"

console.log(prueba1 === prueba2);


let id = Symbol("Hola");

let id2 = Symbol("Hola")

console.log(id === id2);

console.log(id,id2)

console.log(typeof id, typeof id2);

//utilizando symbol dentro de objetos literales, como propiedades privadas

const NOMBRE = Symbol("nombre"); //dentro le ponemos una etiqueta para referenciarla

const persona = {
    [NOMBRE]: "Jon"     //aparece privado como se llama esa propiedad, con la notación de los corchetes
}

console.log(persona)

persona.NOMBRE = "Leonardo"; //la propiead no afecta la propiedad de tipo simbolo que tenia anteriormente

console.log(persona)
console.log(persona.NOMBRE);

console.log(persona[NOMBRE]); //Devuelve el valor de referencia de ese symbol

const SALUDAR = Symbol("saludar");

persona[SALUDAR] = function(){
    console.log("Hola Mundo");
}
console.log(persona)

persona[SALUDAR]();

for(let propiedad in persona){      //al recorrer el objeto no aparece las propieades de tipo symbol, por ser privada.
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//lista en un arreglo las propiedades de tipo symbols
console.log(Object.getOwnPropertySymbols(persona))

/*La mayoria de sus usos es crear elementos privados dentro de un objeto, y que tambien sus referencias
van a ser unicas. */
