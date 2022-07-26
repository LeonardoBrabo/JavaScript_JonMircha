// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

/*
const aniosPasados = (anio,mes,dia) =>{
    mes--;

    let fechaActual = Date.now()
    let fechaIngresada = Date.parse(new Date(anio,mes,dia));
    let resta = fechaActual-fechaIngresada
    return console.log(resta);

}

aniosPasados(1995,11,28);
*/

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

getEdad("1995/11/28")