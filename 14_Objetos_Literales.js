let nombre = "Diana",
    edad = 7;

//esto era antes del la aparicion de los objetos literales. 
const perro ={
    nombre: nombre,  //le asigno como atributo lo que tengo en la variable nombre
    edad: edad,
    ladrar:function(){
        console.log("guau guau");
    }
}

console.log(perro);
perro.ladrar();

// con los objetos literales de ES6


/*si a la variable que vas a asignarle como valor a una propiedad de un objeto
tiene el mismo nombre de la propiedad que estas pretendiendo asignar simplemente
lo guardamos de la siguiente manera:*/

const dog = {
    nombre,     //JS dinamicamente entiende que el nombre de la propiedad es igual al nombre de la variable y entonces tiene el mismo valor.  
    edad,
    raza: "labrador",  // si queremos agregar una propiedad sin asignarle el valo de una variable, de la forma tradicional.
    ladrar(){          // este seria la manera de declarar los metodos, quito los dos puntos y la palabra reservada function.     
        console.log("guau guau guau si");
    }
}

console.log(dog);
dog.ladrar();
 
