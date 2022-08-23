 console.log(document.documentElement.lang) //accedemos al atributo lang del tag html
 console.log(document.documentElement.getAttribute("lang"));
 
 //detecta la url de la clase link-dom
 console.log(document.querySelector(".link-dom").href); 
 console.log(document.querySelector(".link-dom").getAttribute("href"));  // nos trae el nombre del link

 document.documentElement.lang = "en";
 //le cambioamos el valor al atributo del lang.
 console.log(document.documentElement.lang)
 
 //otra forma de asignar un nuevo valor a un atributo.
 document.documentElement.setAttribute("lang","es-MX");
 console.log(document.documentElement.lang);

 //el nombre empieza con $ como notación para variables de manipulación del DOM.
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https:youtube.com");

 
console.log($linkDOM.hasAttribute("rel"));

//trabajando ahora con los data-attributes:

console.log($linkDOM.getAttribute("data-description"));

console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "Link a youtube";

console.log($linkDOM.dataset.description)
console.log($linkDOM.hasAttribute("data-id"))

//eliminando un atributo
console.log($linkDOM.removeAttribute("data-id"))
console.log($linkDOM.hasAttribute("data-id"))


