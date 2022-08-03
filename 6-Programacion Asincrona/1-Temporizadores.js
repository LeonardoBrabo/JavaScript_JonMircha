let temp1 = setTimeout(() => {
    console.log("ejecutando un setTimeout, esto se ejecuta una sola vez.");
    
}, 3000);

let tempo = setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 1000);

clearTimeout(temp1);

clearInterval(tempo);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);