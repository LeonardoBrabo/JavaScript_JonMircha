// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 
//Version 1: encontrar el minimo, buscar su indice,  para luego eliminarlo, pero antes pushearlo a un nuevo arreglo.
//  luego copiar el arreglo y darlo vuelta  para obtener el 2do arreglo ordenado de forma inversa.
// aviso de esta version: el arreglo ingresado queda permantemente modificado.
const  numOrdenados = (arr=undefined)=>{

  const ascendente =[];
  let descendente;
  while((arr.length) > 0){
    let menor =  Math.min(...arr); //busca el menor
    ascendente.push(menor)  //agrega el menor al nuevo arreglo
    let indiceMenor = arr.indexOf(menor); //busca el indice del menor
    arr.splice(indiceMenor,1); //con el indice del menor, se lo elimina del arreglo original.
    
  }
  //sin slice(), la asignación del objeto array se hace por referencia, es decir ambas variables apuntan al mismo array.
  //la modificación afecta a ambas  variables.
  descendente = ascendente.slice().reverse(); //slice(): copia el arreglo y luego con reverse() cambia el orden
  const nuevoObjeto = {
    descendente,
    ascendente
  };

  return console.log(nuevoObjeto);
  
}

numOrdenados([7, 5,7,8,6]);

console.log("-------------------------------------------------");
//Version 2 usar sort(fn)

const  numOrdenados2 = (arr=undefined)=>{

  //sort necesita una función como argumento para comparar correctamente numeros, sino los toma como strings y compara en orden alexicográfico
  const descendente = arr.sort((a,b) => a - b),
      ascendente = descendente.slice().sort((a,b) => b - a);

   const nuevoObjeto = {
    descendente,
    ascendente,
  };
  
  return console.log(nuevoObjeto)

}
 numOrdenados2([1,15,2,10])

 console.log("-------------------------------------------------");


  //version 3 con un algoritmo de ordenamiento (bubble sort, selection sort, insertion sort)

//bubble sort: 
  const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
  
    return arr;
  };
  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = bubbleSort(arr);

  console.log(result);


  //version 4 con algoritmos complejos de ordenamiento (shellsort , Merge Sort), Quicksort

  //http://www.etnassoft.com/2017/03/24/algoritmos-de-ordenacion-en-javascript-revision-es6/
  //https://www.youtube.com/watch?v=Tp9Yz_ta5zo
  //https://www.youtube.com/watch?v=LYxoEONROnM
  //https://www.youtube.com/watch?v=Mx55Fzwx6Yk