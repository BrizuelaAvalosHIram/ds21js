//Brizuela Avalos Hiram 3°F
//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

var max = parseInt(prompt("ingresa un límite para generar un número aleatorio"));
var min = parseInt(prompt("ingresa el mínimo"));

var resultado = Math.floor(Math.random()*(max - min))+min;


console.log(resultado);
