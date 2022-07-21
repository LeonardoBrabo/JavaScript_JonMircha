// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const Capicua = numero =>{
    if(!numero) return console.log("No ingreso ningun número");
    
    (numero == String(numero).split("").reverse().join(""))
        ? console.log("El número es capicua") 
        : console.log("El número no es capicua");
    

}

Capicua(2002);
