// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => Math.floor(Math.random()*(600 - 501 + 1))+501;

/*con el codigo anterior se puede obtener un numero aleatorio entre un rango de un numero maximo(600) y un numero minimo(501)
Es importante indicar que tomará el mínimo y máximo como inclusivos. Es decir, si se le indica a la función un aleatorio
 entre 1 y 3, puede devolver 1, 2 o 3.
*/
 console.log(numeroAleatorio());


