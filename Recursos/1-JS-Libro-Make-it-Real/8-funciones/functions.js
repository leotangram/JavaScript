function hello() {
  console.log("Hola Mundo");
}

hello();



console.log("<<<ARGUMENTOS>>>")

function hello2(name) {
  console.log("Hola " + name);
}

hello2("Germán");
hello2("David");



console.log("<<<Retornando un Valor>>>")

function hello3(name) {
  return "Hola " + name;
}

var g1 = hello3("Germán"); // podemos asignar el valor de retorno a una variable
console.log(g1);

// podemos llamar la función directamente en el parámetro de otra función.
console.log(hello3("David"));