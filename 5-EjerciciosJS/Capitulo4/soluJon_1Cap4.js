// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


const numeroPrimo = (numero= undefined) =>{
    //aca van todas las demás comprobaciones... 
    let divisible = true;
    for(let i = 2;i < numero; i++){
        if((numero % i)=== 0){
            divisible = false;
            break;
        }
    }
    return (divisible)
        ? console.log(`El número ${numero}, SI es Primo`) //si divisible es true, es primo
        : console.log(`El número ${numero}, NO es Primo`) //si es false, significa que la division por alguno delos numero es exacta. por lo tanto no es primo

}

numeroPrimo(4);
numeroPrimo(2);
numeroPrimo(113);


