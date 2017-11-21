function adjustText(str, length) {
  if (str.length > length) {
     str = str.substring(0, length);
  } else {
    while (str.length < length) {
      str += " ";
    }
  }

  return str;
}


// Otra solución
function adjustText(str, length) {
  while (str.length < length) {
    str += " "; 
  }

  if (str.length > length) {
     str = str.substring(0, length);
  }

  return str;
}