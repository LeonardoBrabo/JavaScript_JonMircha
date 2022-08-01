//suma de un numero por si mismo:
function sum(n){
    if (n=== 0){
      return 0;  
    }else{
      return sum(n-1) + n;
    }
  }
  
  console.log(sum(5));

  //Multiplica un numero con sumas.
  function multi(num,veces){
    if(veces === 0){
        return 0;
    }else{
        return multi(num,veces-1) + num;
    }
  }

  console.log(multi(2,4));