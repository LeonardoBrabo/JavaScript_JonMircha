//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


const conversorBase = (numero=undefined,base=undefined)=>{
    
    if(numero === undefined) return console.warn("No a ingresado ningun número")
    if(typeof numero !== "number") return console.error(` ${numero} no es un número`);
    
    if(base === undefined) return console.warn("No ingreso ninguna base");
    if(typeof base !== "number") return console.error(`La base ${base} no es de tipo número`);

    if(Math.sign(numero)=== -1) return console.log("solo debe ingresar numeros enteros positivos")

    
    let conversionBin = numero.toString(2) //convierte en número a binario de tipo string
    if(base === 2){  
        return  console.log(`El número ${numero.toString()} de base binaria a base decimal es igual a ${parseInt(numero,2)}`)  //no funciona de binario a decimal    
    }else if(base === 10){
        return console.log(`El número ${numero} de base decimal a base binaria es igual a ${conversionBin}`);
    }else{
        return console.info("debe igresar 2 en la base si es binaria y 10 si es decimal, unicamente esas opciones");
    }      
    

}

conversorBase();
conversorBase("Hola mundo");
conversorBase(100,8);
conversorBase(132);
conversorBase(-7,2);
conversorBase(134,"2");
conversorBase(110111,2);
conversorBase(7,10) // 111
conversorBase(32,10) // 100000
conversorBase(110,2) // 6




