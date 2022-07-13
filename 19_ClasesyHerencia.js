class Animal{
    //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre,genero){   
        //atributos  
        this.nombre = nombre;
        this.genero = genero;
    }

    //métodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }

}

//creamos nuestros objetos a partir de la clase Animal.

const mimi = new Animal("Mimi","Hembra"),
    scooby = new Animal("Scooby","Macho");


// Ejecutando los métodos de las clases instanciadas:

mimi.saludar()
mimi.sonar()

scooby.saludar();
scooby.sonar();

//Herencia de Clases

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //el método super() se manda a llamar el constructor de la clase padre
        super(nombre,genero);  //va sin el this.
        //este es atributo propio de la clase Perro y la defino denstro del constructro pero fuera de la invocación de super()
        this.tamanio = tamanio;
    }
    //sobre escribimos el método sonar heredado de animal, y lo personalizamos para la clase Perro
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Guau Guau");
    }
}

//invocamos las variables.
const Puchi = new Animal("Puchi","Hembra"),
lobito = new Perro("Lobito","Macho","Gigante");

lobito.saludar();
lobito.sonar();
lobito.ladrar()