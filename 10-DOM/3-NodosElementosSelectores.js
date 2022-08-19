console.log(document.getElementsByTagName("li"));

console.log(document.getElementsByClassName("card"));

console.log(document.getElementsByName("nombre"));

//los anteriores tres han sido reemplazados, por los querySelector

console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu")) // ahora necesita saber si es un id usando #
//este método es mucho más lento que los otros tres.


console.log(document.querySelector("a")) //solo trae el primer selector del tipo que haya encontrado en el html

//para traer todos los tipos a usamos:
console.log(document.querySelectorAll("a"))

//comparten algunos de los métodos de los arreglos pero no son arreglos:

document.querySelectorAll("a").forEach(el => console.log(el));

console.log(document.querySelectorAll(".card"));

//trae el elemento de indice 2
console.log(document.querySelectorAll(".card")[2]);

//seleccion los elementos li dentro de id menu
console.log(document.querySelectorAll("#menu li"));
