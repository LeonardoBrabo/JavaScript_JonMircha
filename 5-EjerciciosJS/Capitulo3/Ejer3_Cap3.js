// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

//version con recursividad:
const factorial = (n) =>{
    if(n === 1 || n===0){
        return 1;
    }else{
        return factorial(n-1) * n;
        
    }
    
}
 console.log(factorial(5));


 //version sin recursividad:

const facto = (num) =>{
    let acum = 1;
    for(let i=1;i<= num;i++){
        acum *= i
    }
    return acum;
}
console.log(facto(5))


