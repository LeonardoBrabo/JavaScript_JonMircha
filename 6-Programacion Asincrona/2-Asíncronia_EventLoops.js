
//Codigo Síncrono Bloqueante:

(()=>{
    console.log("Codígo Síncrono:");
    console.log("inicio");

    function dos(){
        console.log("Dos")
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
})();

console.log("**********************");
//Codigo Asíncrono NO bloqueante:
(()=>{
    console.log("Codigo Asíncrono");
    console.log("Inicio");

    function dos(){
        setTimeout(function(){
            console.log("Dos")
        },1000);
    }

    function uno(){
        setTimeout(function(){
            console.log("Uno");
        },0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");

})();

//probar ambos codigos con el siguiente programa:  http://latentflip.com/loupe/