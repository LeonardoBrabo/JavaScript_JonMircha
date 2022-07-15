// destructuración:



const numeros = [1,2,3];

//supongamos que necesito guardar cada valor que tiene las posiciones del arreglo en una variable diferente

//manera de hacerlo sin destructuración:

let uno= numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno,dos,tres);


//con destructuración seria la siguiente:

/*La manera de hacerlo seria creo un arreglo al cual le voy a asignar el arreglo de numeros
y luego dinamicamente dentro, del nuevo arreglo, coloco el nombre de las variables que quiero
asignar lo que tiene cada posición del arreglo numeros.
*/

const [one,two,three] = numeros;

console.log(one,two,three);

/* otra forma de usar destructuración es siquiero guardar cada una de las propiedades de un objeto
en variables diferentes*/

const persona={
    nombre: "leo",
    apellido: "brabo",
    edad: 26
};

/*si yo quisiera destructurar, creo un objeto y le asigno el objeto persona, donde dentro de nuevo objeto
ingreso el nombre de las variables que quiero que contegan por separado cada propiedad del objeto persona
, pero con la condicion de que estás variables deben tener el mismo nombre que el de las propiedades del objeto
al cual les estoy asignado, sino la destructuración no va a funcionar. lo mismos sucede con el orden en el cual
se les asigna, se debe respetar este orden. */

const {nombre,edad,apellido} = persona;
console.log(nombre,apellido,edad);

/*esto sucede porque la destructuración se basa en el nombre y orden de las variables para buscar y comparar con 
los nombre de las propieades de los objetos. */