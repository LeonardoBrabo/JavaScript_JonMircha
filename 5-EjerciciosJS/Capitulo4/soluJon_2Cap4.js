// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numero) =>{
    if(numero===undefined) return console.warn("No ingresaste un número");
    if(typeof numero ==! "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return (numero % 2 === 0)
        ? console.info(`El número ${numero} es Par`)
        : console.info(`El número ${numero} es Impar`)
}

numeroParImpar();
numeroParImpar("Hola");
numeroParImpar(-398);
numeroParImpar(19);
