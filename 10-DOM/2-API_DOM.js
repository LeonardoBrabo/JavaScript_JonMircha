console.log("***** Elementos del Documento *******");

console.log(window.document)
console.log(document)
console.log(document.head) //elementos del head
console.log(document.body) //elementos del body
console.log(document.documentElement) //representa la etiqueta html
console.log(document.doctype); //trae el doctype
console.log(document.characterSet); //la codificación de caracteres
console.log(document.title); //el titulo de la página html.
console.log(document.links); //captura  todos los links, no son arreglos, no comparten todos los métodos de los arreglos.
console.log(document.images); //trae en un htmlcollection todas las imagenes
console.log(document.forms); //captura lo formularios
console.log(document.styleSheets); //captura los estilos css
console.log(document.scripts); //trae todos los scripts
console.log(document.scripts); //trae todos los scripts


// algúnos Métodos
setTimeout(()=>{
    console.log(document.getSelection().toString()); //captura lo seleccionado y lo transformamos en texto con toString

},3000); //usamos el setTimeout para que al recargar y seleccionar el texto lo podamos ver en la consola,

//nos permite escribir en el documento, y lo pone en la ultima linea (no es una buena practica utilizarlo)
document.write("<h2>Hola mundo desde el API DOM</h2>")

