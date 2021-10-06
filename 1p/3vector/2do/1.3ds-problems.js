//Brizuela Avalos Hiram 3°F

/* INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after
 */

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var p = parseInt(prompt("Teclea la posición que desea cambiar"));
var v = parseInt(prompt("Teclea el valor nuevo"));

if (p<10) {
array.splice((p-1), 1, v);
}
else {
    alert("La posición esta fuera del arreglo");
}
console.log (array);
 /*
 * PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
