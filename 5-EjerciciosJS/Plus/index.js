let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("¿Qué te gustaría saber acerca del usuario?", "name");
  
  // acceso por medio de una variable
  console.log( user[key] ); // John (si se ingresara "name")