// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero =0) =>{
    if(!numero) return console.warn("No ingresaste un número");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un número`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves) //hay que dejar los numero convertidos en cadenas de texto porque si ingreso 200 el inverso queda como 2 (002) en tipo number.
     ? console.info(`Sí es capicua, Número original ${numero}, Número al revés ${alReves}`)
     : console.info(`No es capicua, Número original ${numero}, Número al revés ${alReves}`);
}

capicua();
capicua("Hola");
capicua({});
capicua(2000);
capicua(2002);
capicua(18.99);
capicua(212.212)

