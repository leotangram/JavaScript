function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}



// Otra Opción
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}