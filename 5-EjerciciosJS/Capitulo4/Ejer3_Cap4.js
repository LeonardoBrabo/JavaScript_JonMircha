// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const temperatura = (grados=undefined,escala=undefined) => {
    if(!grados) return console.log("No ingreso ninguno grado");
    if(!escala) return console.log("No ingreso ninguna escala");
    escala = escala.toUpperCase();
    if(escala === "C" || escala === "F"){
        
        if(escala === "C"){
            return console.log(`${grados}° Celcius, en grados Fahrenheit sería igual a ${Math.round((grados*1.8)+32)}° grados`)
        }else{
            return console.log(`${grados}° Farenheit, en grados Celcius sería igual a ${Math.round((grados-32)/1.8)}° grados`)
        }

    }else{
        return console.log("debe ingresas C para Celcius o F para Fahrenheit, unicamente");
    } 
    
    
}
temperatura(30,"f");