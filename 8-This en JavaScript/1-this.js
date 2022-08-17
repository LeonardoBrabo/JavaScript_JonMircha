console.log(this) //en node hace referencia al objeto Global y en El navegador al objeto Window

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}

imprimir()  // hace referencia al scope en el que es ejecutada (el this)

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);
    }
};

obj.imprimir();

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir,
}

obj2.imprimir()

const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir:()=>{  // la arrowfunction no maneja su propio scope entonces, va al scope del padre, es decir al this del padre.
        console.log(this.nombre);
    }
}

/*por este motivo al crear clases y objeto que tendran métodos. es mejor utilizar funciones anónimas y no arrowsFunctions */

obj3.imprimir();

function Persona (nombre){  // creamos una función constructora
    this.nombre = nombre;
    // return console.log(this.nombre);

    /*
    return function(){ // en este caso como es una funcion anonima no retornara el nombre
        console.log(this.nombre);
    }
    */

    return () => console.log(this.nombre) // en este caso para solucionar al problema anterior usamos arrowfunction. para que tome el scope padre.
}

let jon = new Persona("Jon");  //es una función constructora que crea su propio scope.

jon()


