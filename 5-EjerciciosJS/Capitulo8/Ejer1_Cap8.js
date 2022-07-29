
let  cadena = "hola mundo"
// let nuevoArr = Array.from(cadena);
// console.log(Object(nuevoArr));


const style = ["Jazz","Blues"];
style.push("Rock-n-Roll");
console.log(style);

if( style.length % 2 !== 0){
    style[Math.floor((style.length)/2)] = "Classics"
}
console.log(style);

console.log(`primer elemento quitado: "${style.shift()}"`);

console.log(style);

style.unshift("Rap","Reggae");
console.log(style);

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});
arr[2]();