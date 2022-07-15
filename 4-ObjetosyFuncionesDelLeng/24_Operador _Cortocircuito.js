// Operador OR:

function saludar(nombre){
	nombre = nombre || "Desconocido";
	console.log(`Hola ${nombre}`);  
}
saludar("Leo"); 
saludar(); //nos dira Hola Desconocido,

console.log("cadena" || "Valor de la derecha"); 
console.log( 19 || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log({}|| "Valor de la derecha");

//en todas devuelve el valor del lado izquiedo, por tendencia de ser true, como los valores Truthy

console.log(false || "Valor de la derecha");
console.log( null || "Valor de la derecha");
console.log( undefined || "Valor de la derecha");
console.log( ""|| "Valor de la derecha");
console.log( 0|| "Valor de la derecha");

//en todas devuelve el valor de la derecha, por la tendencia a false de los valores de la izquierda por ser valores Falsy 


//Operador de cortocircuito de AND : Está vez imprimi los valores que tienden a false,e ignora los que tienden a true

console.log(false  && "Valor de la derecha");
console.log( null  && "Valor de la derecha");
console.log( undefined  && "Valor de la derecha");
console.log( "" && "Valor de la derecha");
console.log( 0 && "Valor de la derecha");

//en todas devuelve el valor de la izquierda  por la tendencia a false que tienen estos.