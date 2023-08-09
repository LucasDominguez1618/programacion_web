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
const palabrasA = ["hola", "seca", "mucha", "cosa"];
const palabras = ["hola", "seca", "mucha", "coso"];
function terminanEnA(words) {
  const palabra = words.every((words) => words.endsWith("a"));
  console.log(palabra);
}
terminanEnA(palabrasA);
