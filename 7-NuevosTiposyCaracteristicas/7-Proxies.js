//proxies:

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {  //en el manejador se ingresan las validaciónes.
    set(obj,prop,valor){

        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
        }
        
        obj[prop] = valor;
    }
}

const jon = new Proxy(persona,manejador);

jon.nombre = "Jon";
jon.apellido = "MirCha";
jon.edad = 35;
jon.twitter = "@jonmircha";

console.log(jon);

console.log(persona);