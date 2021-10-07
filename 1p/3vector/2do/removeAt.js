//Brizuela Avalos Hiram 3°F
*/ PROBLEM 2
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
var array = [1,2,3,4,5,6,7,8,9,10];

var p = parseInt(prompt("ingrese la posición a eliminar"));

if (p<10){
    array.splice(p,1);
}
else{
    alert("el valor está fuera de rango");
}
console.log(array);
