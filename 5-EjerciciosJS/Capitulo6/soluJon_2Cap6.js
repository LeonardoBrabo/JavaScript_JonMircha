// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre ="")=>{

    if(nombre === "") return console.warn("No ingreso ninguna nombre de texto");
    if(typeof nombre !== "string") return console.error("lo que ingreso no es un texto");

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúüÜ\s]+$/g.test(nombre);

    return (expReg)
        ? console.info(`"${nombre}", es un nombre válido`)
        : console.info(`"${nombre}", NO es un nombre válido`);

}

validarNombre();
validarNombre(3);
validarNombre("Jonathan");
validarNombre("Jonathan Mircha");
validarNombre("JonathanMircha , 35");