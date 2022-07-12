function Animal(nombre,genero){
    //Atributos de mi función constructora.
    this.nombre = nombre;       
    this.genero = genero;

    //métodos de mi función constructora.
    this.sonar= function(){
        console.log("Hago sonidos porque estoy vivo");

    }
}

//creando instancias con nuestra prototipo:
const snoopy = new Animal("Snoopy","Macho");
const lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny);


//-------------Diferencia con un objeto literal---------

const animal = {   
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

console.log(animal);

//Función Constructora donde asignamos los métodos al prototipo, no a la función como tal:

function Animal(nombre,genero){
    //Atributos de mi función constructora.
    this.nombre = nombre;       
    this.genero = genero;
}

//métodos de mi función constructora.
//métodos agregados al prototipo de la función constructora.
    Animal.prototype.sonar= function(){  
        console.log("Hago sonidos porque estoy vivo");

    }
