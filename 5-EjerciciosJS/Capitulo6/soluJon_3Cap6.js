// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


const validarEmail = (email ="")=>{

    if(email === "") return console.warn("No ingreso ningun email");
    if(typeof email !== "string") return console.error("lo que ingreso no es un texto");

    //expresion regular que usa Jon para validar emails.
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ? console.info(`"${email}", es un email válido`)
        : console.info(`"${email}", NO es un email válido`);

}

validarEmail("jonmircha@gmail.com");
validarEmail("jon,mir,char@gmail.com");

