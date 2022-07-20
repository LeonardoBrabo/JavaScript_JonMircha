//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

//version 1:
function DetectarPalabras(cadena,palabra){
    let cont = 0;
    const arr = cadena.split(" ");
    for(element of arr){
        if(element === palabra){
            cont++
        }
    }
    return console.log(`La palabra ${palabra} se repite ${cont} veces`);
}
DetectarPalabras("hola mundo mundo", "mundo");


//Version 2:
const MifuncionBuscadora = (cadena = "",palabra = "") =>{
    if(cadena === "") return  console.log("No ingreso ninguna cadena");
    if(typeof cadena !== "string") return console.log(`Deberia ingresar una cadena y no un ${typeof cadena}`);
    if(palabra === "") return console.log("No ingreso una palabra a buscar");
    if(typeof palabra !== "string") return console.log(`Deberia ingresar una palabra y no un ${typeof palabra}`);
            
    let cont = 0;
    const arr = cadena.split(" ");

    for(let i= 0; i< arr.length;i++) if(arr[i].toLowerCase() === palabra.toLowerCase()) cont++;

    if(cont === 0) console.log("La palabra no se encuentra en el texto");
    if(cont === 1) console.log(`La palabra ${palabra} se repite ${cont} vez`);
    if(cont > 1)  console.log(`La palabra ${palabra} se repite ${cont} veces`);

      
}
MifuncionBuscadora("texto Leon libro texto auto ","texto");