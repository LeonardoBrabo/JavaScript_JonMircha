// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validadorNombre = (nombre)=>{
    if(nombre === undefined) return console.warn("No ingreso ningun nombre");
    if(typeof nombre !== "string") return console.error("lo que ingreso no es un texto");
    const legalReg = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
    if(!(legalReg.test(nombre))){
        return console.log(`El nombre: ${nombre} NO, es válido`)
    }else{
        return console.log(`El nombre: ${nombre} SI, es válido`)
    }
}

validadorNombre("Jonathan Mircha");

/*
/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
inicio de cadena - luego un caracter entre A-Z solo uno {1} - uno o mas caracteres a-zñáéíóú - luego cero o mas espacios
[\s]* - de todo lo anterios uno o mas - final de cadena. 

*/ 
