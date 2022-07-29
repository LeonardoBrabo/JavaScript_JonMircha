// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingreso ningun arreglo");

    if(arr.length === 0) return console.warn("El arreglo está vacio");

    if(!(arr instanceof Array)) return console.error("lo que ingreso no es un arreglo");

    for(let element of arr){    //controla que todos los elementos sean de tipo numerico.
        if (typeof element !== "number"){
            return console.error(`El elemento "${element}" no es de tipo numerico, No es valido el procedimiento`);
        }
    }

    return console.info(
        arr.reduce((total,num,index,arr)=>{
            total += num;
            if(index === arr.length -1){
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`
            }else{
                return total;
            }
        })
    )
}

promedio([9,8,7,6,5,4,3,2,1,0]);