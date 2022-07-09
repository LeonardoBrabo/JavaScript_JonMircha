//while

let contador = 0;

while(contador < 10){

    console.log("while "+contador);
    contador++;
}

/* En el while antes de comenzar a ejecutar las lineas de codigo, la condicion se debe cumplir*/



// do while

do{
    console.log("do while " +contador);
    contador++;
}while(contador < 10);

/*En el caso del do while siempre se va a ejecutar una vez todo el bloque, porque la evaluación de la condicion
está al final*/

//en do while y while necesite declarar una valiariable e inicializarla para que me controlara el ciclo
// ademas tambíen de un incremento/decremento al final de las sentencias de codigo mas la condición



// for

/*El for es una estructura que consta de 3 partes:

for(inicializacion de la variable; condicion; decremento o incremento){
    
   sentencias que ejecuta el for

}
*/
for(let i= 0; i<10; i++){
    console.log("For " + i);
}


let numero = [10,20,30,40,50,60,70,80,90];

for(let i = 0; i< numero.length; i++){
    console.log(numero[i]);
}

//for in: para recorrer las propiedades de un objeto

const leo={
    nombre:"Leonardo",
    apellido: "Brabo",
    edad: 26
}


for(const propiedad in leo){
    console.log(`Key:${propiedad}, Value:${leo[propiedad]}`);  
}

//utilizamos la notación objeto[propiedad] para visualizar el contenido, en for in no sirve usar la notación de punto para recuperar un dato de una propiedad.


//for of: me permite recorrer cualquier tipo de objeto que sea iterable en JS, por ejemplo un arreglo

for(const elemento of numero){
    console.log(elemento);
}

// tambien podemos recorrer un string con for of:

let cadena = "aguante el mate";
for( const caracter of cadena){
    console.log(caracter);
}