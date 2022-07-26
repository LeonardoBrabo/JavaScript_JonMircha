// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDecuento = (monto= undefined, descuento = 0) =>{

    //faltan las validaciones...

    return console.info(`${monto} - ${descuento}% = ${monto-(monto*descuento)/100}`)
}
aplicarDecuento(1000)
aplicarDecuento(1000,20)
