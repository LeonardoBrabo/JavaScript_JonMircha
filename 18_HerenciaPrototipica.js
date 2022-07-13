//herencia prototipica
/*generamos una función constructora para crear un perro, y el prototipo perro va a heredar
las caracteristicas de Animal
*/

function Animal(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

//Perro va a recibir como parametros los mismo que el padre Animal
//adicionalmente le podemos agregar otro parametro que sea parte de Perro (tamanio)
function Perro(nombre,genero,tamanio){
    //el la mayoria de los lenguajes que usan clases, tenemos un método llamado "super" que manda a llamar el constructor de la clase padre
    //pero aca lo que hacemos es crear una variables que va a colgar al this de de la funcion a la cual la llamaremos sueper, para mantener los mismo nombres
    //y super vaq a ser igual al prototipo del cual yo me voy a basar para hacer la herencia hacia perro
    // Es decir su elemento padre va a ser Animal.
    this.super = Animal;

    //ahora ejecutamos ese método super, y si super es la clase(funcion constructora)Animal recibe dos parametros
    this.super(nombre,genero);

    this.tamanio = tamanio //caracteristica adicional que no está en la función constructora padre Animal

}

/*hasta ahora lo unico que hicismo fue invocar el constructor animal con la propiedad super
dentro de mi prototipo perro, pero generalmente donde voy a hacer la herencia,
aqui:  */

//Generar que el prototipo Perro sea una instancia de Animal:
//Perro está heredando de Animal:
Perro.prototype = new Animal

//podemos generarle su propio constructor a la función constructora perro.
Perro.prototype.constructor = Perro;
//al igualarlo aqui, con su propio constructor ya se va a estar jalando todas las caracteristicas
//de su prototipo padre,que en este caso es Animal.

/*Cuando una clase hija hereda los metodos de una clase padre
aqui con los prototipos eso va a ser igual, siendo que perro una clase
que hereda todo de Animal, puede utilzar sus respectivos metodos como sonar y saludar
podemos sobreescribir los métodos del padre */

//Sobreescritura de métodos del prototipo  padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

//otro método propio de la instancia perro
Perro.prototype.ladrar = function(){
    console.log("guauuu guauuu!!!");

}

