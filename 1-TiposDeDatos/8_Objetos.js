// un objeto es recomendable declararlo con const.
// se definen entre llaves
const b = {}; //objeto vacio
console.log(typeof b);

//definiendo un objeto, este puede contener cualquier tipo de dato es su interior incluso otros objetos.
// propied: valor se separan por una coma, excepto al final del objeto antes de cerrarlo.
const leo= {
    nombre: "Leonardo",
    apellido: "Brabo",
    edad: 26,
    pasatiempos: ["Correr","Pesas","Leer"], 
    soltero: true,
    contacto:{  //puede contener otros objetos.
            email: "leonardo@gmail.com",
            instagram: "leonardo_brabo",
            movil: "3625897956" //no es necesario ponerle coma al final la ultima propiedad:valor
    },
    saludar: function(){
        console.log(`Hola :D`);
    },

    decirMiNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
        }
    }
    
    
    console.log(leo);

// En los objetos se puede acceder a las propiedades con la notación de corchetes objeto["propiedad"]

console.log(leo["nombre"]);

// pero la forma mas aceptada para acceder a las propiedades es con la notación del punto . (como en archivos de AED)
console.log(leo.nombre);

// si quiero acceder a una elemento de un arreglo que forma parte del contenido de un atributo/propiead:
console.log(leo.pasatiempos[1]);

//si quiero ver un atributo del objeto que contiene otro atributo de mi objeto:
console.log(leo.contacto.instagram);

//ejecutando un método de nuestro objeto creado:
//objeto.funcion()

leo.saludar();

//ejecutando el método con la palabra reservada this:
leo.decirMiNombre();

