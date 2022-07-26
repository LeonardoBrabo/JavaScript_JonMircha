// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


const conversorBase = (numero=undefined,base=undefined)=>{
    
    if(numero === undefined) return console.warn("No a ingresado ningun número")
    if(typeof numero !== "number") return console.error(` ${numero} no es un número`);
    
    if(base === undefined) return console.warn("No ingreso ninguna base");
    if(typeof base !== "number") return console.error(`La base ${base} no es un número`);

    if(Math.sign(numero)=== -1) return console.log("solo debe ingresar numeros enteros positivos")

    /*
    numero = String(numero);
    console.log(typeof numero);
    
    if(base === 2){  
        return  console.log(`El número ${numero} de base binaria a base decimal es igual a ${parseInt(numero,2)}`)  //no funciona de binario a decimal    
    }else if(base === 10){
        return console.log(`El número ${numero} de base decimal a base binaria es igual a ${parseInt(numero,2)}`);
    }else{
        return console.info("debe igresar 2 en la base para, binario, y 10 para decimal, unicamente esas opciones");
    }      
    */ 

}


// conversorBase();
// conversorBase("Hola mundo te quiero mucho");
// conversorBase(100,8);
// conversorBase(132);
// conversorBase(134,"2");
conversorBase(100,10);
conversorBase(100,10);



