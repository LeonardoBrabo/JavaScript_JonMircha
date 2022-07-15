
try {
   console.log("En el Try se agrega el codigo a evaluar");
   VariableNodeclarada;  //error  si no estuviera no se ejecuta lo que hay en catch
   console.log("sengudo mensaje en el try"); 
} catch (error) {       //se ejecuta cuando encuentra un error o de sintaxis o un error de logica que programemos.
    console.log("Catch,captura cualquier error surgido o lanzado en el try");
    console.log(error); // mandamos a imprimir el error para ver como se presenta.
}finally{
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch")

}

//Controlando los errores personalizados con nuestros mensajes personalizados:

try{
    let numero = "a";
    if(isNaN(numero)){  //isNaN() es una funcion que evalua si no es un numero y devuelve un booleano
        throw new Error("El caractér introducido no es un número"); // cambia el mensaje de error del objeto error
    }
    console.log(numero*numero);  // esta linea no se ejecuta si hay un error
}catch(error){
    console.log(`Se produjo el siguiente error ${error}`) // se muestra nuestro mensaje de error personalizado
}

//throw es la palabra reservada para definir nuestro error personalizado
// existen como 8 tipos de errores diferente, pero si queremos tener un mensaje de error de logica de nuestro programa usamos el Objeto Error general.