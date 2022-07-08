// Condicional simple if - else

let edad = 17;
if( edad > 17){  //tambien se puede comparar con (edad >= 18)
console.log("Eres  mayor de edad");
}else{
console.log("Eres menor de edad");
}

// condicional anidado if- else if - else

let hora = 5;
if (hora >= 0 && hora <= 5){
    console.log("Dejame dormir");
}else if(hora >= 6 && hora <=11){
    console.log("Buenos días");
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas Tardes");
}else{                                  //la ultima comparación podemos hacerlo simplemente con else.
    console.log("Buenas noches");
}

// Simplificación del if-else: El operador Ternario

// se llama operador ternario porque esta compuesto por tres partes
/*(condicion) ? CodigoSiEsVerdadero : CodigoSiEsFalsa */

console.log("Operador Ternario");

let eresMayor = (edad >= 18) ? "Eres mayor de edad" : "Eres menos de edad";

console.log(eresMayor);


// Manera el la que se suele dar formato al operador ternario para que sea mas facil de visualizar:
/*

let eresMayor = (edad >= 18)
 ? "Eres mayor de edad" 
 : "Eres menos de edad";

*/


// switch - case:  condicional multiple,

let dia = 2;
switch (dia) {
    case 0:
        console.log("domingo");
        break;
    case 1:
        console.log("lunes");
        break;  // hace que termine de ejecutarse el condicional si se cumple el caso.
    case 2:
        console.log("Martes");
        break;
    default:   // si la variable no caen en ninguno de los casos definidos, ejecutara el valor por defecto.
        console.log("miercoles,jueves,viernes,sabdo")
        break;
}