// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/*version 0- no funca.
function recortar(cadena,numcar){
    let arr = [];
    for(let i= 0; i < cadena[numcar]; i++){
        arr.push(cadena[i]);
    }
    return arr;
}
console.log(recortar("Leonardo",3));
*/

//version 1:
function recortar(cadena,numcar){
    const cadena2 = cadena.slice(0,numcar);
    return console.log(cadena2);
}
recortar("Leonardo",4);



//version 2:
const recortar2 = (cadena,numcar) => console.log(cadena.slice(0,numcar)); //corta la cadena desde el indice 0 al numero ingresado
recortar2("Sabrina",5);



//version3 sin slice very dificul :D.
function recortar3(cadena,numcar){
    const arr2=[];
    const arr = cadena.split(""); //el string se transforma en un array
    for(let i= 0; i < arr.length; i++){
        if (i === numcar){
            const result = arr2.toString(); //convierte de un arreglo a un string, pero este método agrega comas por cada caracter
            return  console.log(result.replace(/,/g,"")); //reemplazamos la comas con un blanco usando la expresion regular, y la bandera g. 
        }                               //tambien existe un metodo join(): que une todos los elementos de un arreglo en una cadena
        arr2.push(arr[i]); 
        
    }
   
    
}
recortar3("JavaScript",5);
