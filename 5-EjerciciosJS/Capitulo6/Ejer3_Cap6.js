// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validadorCorreo = (correo) =>{

    if(correo === undefined) return console.warn("No ingreso ningun correo");
    if(typeof correo !== "string") return console.error("lo que ingreso no es un texto");

    const correoRex = /^[a-zA-Z]{3,}\w*@(gmail|yahoo|hotmail).com$/

    if(correoRex.test(correo)){
        console.log(`El correo "${correo}" ES VALIDO.`)
    }else{
        console.log(`El correo "${correo}" NO ES VALIDO.`)
    }

}


validadorCorreo();
validadorCorreo(1234);
validadorCorreo("jonmircha@gmail.com");
validadorCorreo("jonmircha@yahoo.com");
validadorCorreo("jonmircha@pepito.com");
validadorCorreo("jo@gmail.com");
validadorCorreo("jon@gmail.com");
validadorCorreo("4568798@gmail.com");
validadorCorreo("leo1234@gmail.com");



