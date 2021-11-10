//Brizuela Avalos Hiram 3F
/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 */

function Cola(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(item){         //Agrega un elemento al final de la cola
    this.dataStore.push(item);
}

function dequeue(){             //Elimina un elemento del frente de la cola
    return this.dataStore.shift();
}

function front(){               
    return this.dataStore[0];       //Con front y back examinamos todos los elementos al frente y al final de la cola
}

function back(){                    
    return this.dataStore[this.dataStore.length-1];
}

function toString(){               //Con el  toString mostramos los elementos
    var retStr = "";
    for(var i=0; i<this.dataStore.length; i++){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty(){
    if (this.dataStore.length == 0){        //Para finalizar necesitamos la función para saber si una cola está vacía
        return true;
    }
    else {
        return false;
    }
}

var q = new Cola();
q.enqueue("Hiram");
q.enqueue("Rodrigo");
q.enqueue("Marco");
q.enqueue("Gustavo");
q.enqueue("Margarito");


console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("al frente: "+q.front());
console.log("atrás: "+q.back());
