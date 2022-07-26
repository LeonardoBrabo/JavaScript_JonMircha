// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto= undefined,descuento=undefined)=>{
    
    if(monto === undefined) return console.warn("No a ingresado ningun número")
    if(typeof monto !== "number") return console.error(` ${monto} no es de tipo número`);
    
    if(descuento === undefined) return console.warn("No ingreso ninguna descuento");
    if(typeof descuento !== "number") return console.error(`El descuento ${descuento} no es de tipo número`);

    if(Math.sign(monto)=== -1) return console.log("solo debe ingresar numeros enteros positivos en el monto")
    if(Math.sign(descuento)=== -1) return console.log("solo debe ingresar numeros enteros positivos en el descuento")

    if(monto === 0) return console.error("El monto no puede ser 0");

    
    
    let valorDescuento = Math.floor((descuento*monto)/100);
    console.log(`El monto final luego de aplicar el ${descuento}% de descuento al precio de $${monto} es de $${monto-valorDescuento}`);

}

aplicarDescuento();
aplicarDescuento(-89,20);
aplicarDescuento(100);
aplicarDescuento("79");
aplicarDescuento(800,-80);
aplicarDescuento(1000,20);
aplicarDescuento(542.89,75);




