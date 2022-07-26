// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


//Version 1:

const getEdad = (fecha)=>{
    let fechaActual = new Date();

    let fechaIngresada = new Date(fecha);

    let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();

    let diferenciaMes = fechaActual.getMonth() - fechaIngresada.getMonth();

    let diferenciaDia = fechaActual.getDay() - fechaIngresada.getDay();


    if(diferenciaMes < 0 || diferenciaMes === 0 && diferenciaDia < 0){
        edad--;
    }
    return console.log(`${edad} años, hoy ${fechaActual.toLocaleDateString()}`);
}


getEdad("1995/11/28");


//version 2:
function calcularEdad(fecha){
    let diferencia = Date.now() - fecha.getTime();

    fecha = new Date(diferencia);

    return Math.abs(fecha.getUTCFullYear() - 1970);
}

// el mes 10 corresponde a noviembre en Date.
console.log(calcularEdad(new Date(1995,10,28)));

console.log(new Date(1995,10,28));