// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra ="") =>{
    if(!palabra) return console.warn("No ingresaste una palabra o frase");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return (palabra === alReves)
        ? console.info(`Sí es palíndromo,Palabra original ${palabra}, Palabra al revés ${alReves}`)
        : console.info(`No es palíndromo,Palabra original ${palabra}, Palabra al revés ${alReves}`)

}

palindromo();
palindromo("Hola mundo");
palindromo("saLaS");