// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const Palindromo = (frase)=> {
    let palabraAlrevez = frase.split("").reverse().join("");
    // console.log(palabraAlrevez.replace(/\s/g,""));
    console.log(palabraAlrevez);
    ((palabraAlrevez.toLowerCase()).replace(/\s/g,"") === (frase.toLowerCase()).replace(/\s/g,"")) 
    ? console.log(`Es un palíndromo`)
    : console.log(`No es un palíndromo`);
}  


Palindromo("Dabale arroz a la zorra el abad");

/*al comparar en el operador ternario, convertimos ambos string a todos sus caracteres en minusculas, para evitar
un resultado negativo en el caso que una letra sea mayuscula, ademas con el método replace usando la expresion regular /\s/g,""
reemplazamos todos los espacios en blanco por un caracter vacio, es decir quitamos todos los blancos, entonce de ésta forma poder
comparar frases completas. */ 