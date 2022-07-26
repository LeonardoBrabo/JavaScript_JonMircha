// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


//version 1: la más deficiente(no funca del todo).
/*
const numPrimo = (num) =>{
    const primos = [2,3,5,7,11,13];
    if(primos.indexOf(num) !== -1){
        return console.log(`El numero ${num} SI es un numero primo`);
    }else{
        primos.forEach((element)=>{
        
            if(num % element === 0 ) return console.log(`El numero ${num} NO es un numero primo`)
            if((num / element) > element) return console.log(`El numero ${num} SI es un numero primo`);        
        });
    }
}

numPrimo(117);
*/

//version dividendo hasta la mitad del numero ingresado, si da exacta, no es un número primo

const esPrimo = (numero = undefined) =>{
    //Casos Especiales
    if(!numero) return console.log("No ingreso ningun Numero");
    if(typeof numero !== "number") return console.log("lo que ingreso no es un numero.");
    if(Math.sign(numero) === -1) return console.log("No deberia ingresar numero negativos");

    numero = Math.floor(numero); //por si ingresa un numero no entero le redondeamos.

    if(numero== 0 || numero == 1) return console.log(`${numero} No es un numero primo`);
    for(let i = 2; i <= numero/2; i++ ){
        if(numero % i === 0){
            return console.log(`${numero} No es un numero primo`);
        }    
    }
    // sin no se pudo dividir por ninguno de los de arriba, sí es primo.
    return console.log(`${numero} Si es un numero primo`);

}

esPrimo(1);
esPrimo(2);
esPrimo(113);
esPrimo(22);
esPrimo(4);
esPrimo("HOla mundo");
esPrimo();
esPrimo(7.4);




