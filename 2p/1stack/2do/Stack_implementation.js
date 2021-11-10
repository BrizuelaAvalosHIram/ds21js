//Brizuela Avalos Hiram 3°F
/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation (array-based)
 *
 */

function Pila() {
    this.dataStorage = [];          //Implementación de la pila en base a arreglos
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

//Implementación de funciones 

function push(item) {               
    this.dataStorage[this.top++] = item;
    
}

function pop(){                     
    return this.dataStorage[--this.top];    
}

function peek() {               
    return this.dataStorage[this.top-1]
}

function clear(){
    this.top =0;
}

function length(){
    return this.top;
}

var s = new Pila();     //Definición de la pila
//Ingresamos elementos
s.push("Hiram");
s.push("Rodrigo");
s.push("Marco");
s.push("Roger");

console.log("longitud " +s.length());     //Imprimir la longitud de la pila
console.log(s.peek());      //Se muestra el último elemento

//Sacamos el último elemento de la pila
var popped = s.pop();
console.log("Los elementos son: "+popped);      //se muestra el elemento que sacamos de la pila
console.log(s.peek());                //el último elemento que quedó en la pila

s.push("Gustavo");          //Ingresamos uno más 
console.log(s.peek());      //se muestra el que ahora es el último elemento 
s.clear();        //Limpiamos la pila

console.log("Longitud: " + s.length());       //Mostramos la longitud (0)
console.log(s.peek());                        //Se muestra el último elemento de la pila "Indefinido"
s.push("Brizuela");                           //Agregamos un elemento
console.log(s.peek());                        //Mostramos el último elemento agregado


