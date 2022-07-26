// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) =>{

    if(fecha === undefined) return console.warn("No ha ingresado ningun fecha");

    // intanceof devuelve true si el objeto pasado del lado izquierdo es una instancia del prototipo Date. 
    // en este caso negamos para que entre al if en el caso de que se ingrese otro tipo de objeto que no sea de la clase Date.
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        //anios en milisegundos 1000= 1seg , 1seg*60 = 1min  1min*60 = 1h , 1h*24 = 1Dia, 1Día*365Días = un año
        aniosEnMs = 1000 *60 *60 *24 *365
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

    return (Math.sign(aniosHumanos)=== -1)
        //si ingresa una fecha posterior a la actual
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos)=== 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
        
}

calcularAnios({}); // un objeto que no es intancia de Date;
calcularAnios(new Date());
calcularAnios(new Date(1995,10,28));
calcularAnios(new Date(2070,10,28));



