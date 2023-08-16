//const numbers = [1, 2, 3, 4];
//function sumarPares(numeros) {
//  let suma = 0;
//for (let i = 0; i < numeros.length; i++) {
//if (numeros[i] % 2 === 0) {
//suma += numeros[i];
//}
//}
//console.log(suma);
//}
//sumarPares(numbers);
//const palabrasA = ["hola", "seca", "mucha", "cosa"];
//const palabras = ["hola", "seca", "mucha", "coso"];
//function terminanEnA(words) {
//  const palabra = words.every((words) => words.endsWith("a"));
//  console.log(palabra);
//}
//terminanEnA(palabrasA);
//const numeros = [1, -2, -7, 8, -3];
//function sortAbsoluteNumbers(numbers) {
//  let numeros = [];
//  numbers.map((item) => {
//    const absoluteNumbers = Math.abs(item);
//    numeros.push(absoluteNumbers);
//  });
//  return numeros.sort((a, b) => a - b);
//}

//console.log(sortAbsoluteNumbers(numeros));

let words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];
/*let word = "pepito";
function buscaPalabras(words, word) {
  const posicionpepito = words.indexOf(word);
  console.log(posicionpepito);
  const palabras = words.filter(function (word) {
    return word.length > posicionpepito;
  });
  return palabras;
}
console.log(buscaPalabras(words, word));


function createObject(name, subs) {
  hash = name.length * subs;
  getStatus = function () {
    console.log("el canal de", name, "tiene", subs);
  };
  const persona = {
    hash,
    name,
    subs,
    getStatus,
  };
  return persona;
}
const obj = createObject("Lukas", 1000);
console.log(obj.getStatus());

const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { weight = 70, height = 180 } = person;
console.log(weight, height);

lo que se va a imprimir es weight y el height ya que es lo unico que esta en el console log


const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person;
console.log(age);

no se imprime nada porque age no existe afuera del Person



3) el atajo que nos permite recuperar el valor de una propiedad de un objeto se le llama desestructuraciòn
*/
