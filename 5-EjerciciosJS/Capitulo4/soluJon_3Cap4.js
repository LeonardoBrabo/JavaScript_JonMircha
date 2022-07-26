// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertiGrados = (grados=undefined,unidad=undefined) => {
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");
    
    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, NO es un número`);
    
    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");
    
    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es un una cadena de texto`);

    // !/(C|F)/.test(unidad) si no es C o F
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

    if(unidad ==="C"){
        return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`)
    }else if(unidad === "F"){
        return console.info(`${grados}°F = ${Math.round((grados-32)*(5/9))}°C`)
    }

}
convertiGrados();
convertiGrados("2");
convertiGrados(2);
convertiGrados(1,"Hola");
convertiGrados(2,"E");
convertiGrados(100,"C");
convertiGrados(30,"F");
