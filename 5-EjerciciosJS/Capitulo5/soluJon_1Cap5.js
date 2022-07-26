// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


const  convertirBinarioDecimal = (numero = undefined, base= undefined) =>{
    //faltan las validaciónes...

    if(base === 2){
        return  console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    }else if(base === 10){
        
        return  console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    }else{
         return console.error("El tipo de base a convertir NO es válido")
    }
}

convertirBinarioDecimal(100,2);
convertirBinarioDecimal(114,10);