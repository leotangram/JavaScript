function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }


// Otra forma
function sumame(arr) {
  var suma = 0;
  for (var i=0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

// Otra Forma
function sumame(arr) {
  return arr.reduce(function(memo, i) {
    return memo + i;
  }, 0);
}            