// break y continue


const numeros = [1,2,3,4,5,6,7,8,9,0];

for(let i= 0; i<numeros.length; i++){

    if(numeros[i] === 5){    //si queremos que cuando encuentre el elemento 5 salga del for., tambien podiamos operar con la posicion o el indice i nada mas, para que cuando llegue a esa posicion se salga.
        break;
    }

    console.log(numeros[i]);
}


//continue:

for(let i= 0; i<numeros.length; i++){

    if(numeros[i] === 5){  // El numero que esta omitiendo al imprimir es el 5, esto es porque continue omite que se ejecute en codigo de esa iteración
        continue;     
    }

    console.log(numeros[i]);
}
