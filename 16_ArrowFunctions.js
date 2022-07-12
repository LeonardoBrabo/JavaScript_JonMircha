
//formato de una arrow function

//uso llaves cuando tengo más de una linea de instruccion.
const saludar = () => {
	console.log("Hola");
	console.log("como estas");
}

//pero si solo tengo una linea de intrucción dentro de la funcion no necesita llaves:

const saludo = () => console.log("Hola, como estas");

// para ejecutarla sigue siendo igual que las demas funciones:

saludo();

//Pasar parámetros a una arrow function:

//si tengo un solo parametro no es necesario los paréntesis.
const saludito = nombre => console.log(`Hola ${nombre}`)

//Pero si tengo más de un parametro, debo usar nuevamente los parentesis:

const saludido2 = (nombre,apellido) => console.log(`Hola ${nombre} ${apellido}`)

//Esto a su vez es un return  implícito.    

const suma = (a,b) => a + b;   //return implicito.
console.log(sumar(9,9));