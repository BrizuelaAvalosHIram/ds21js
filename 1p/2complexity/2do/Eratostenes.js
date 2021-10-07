//Brizuela Avalos Hiram 3°F
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements
var n = parseInt(prompt("ingrese el límite"));

Eratostenes (n);
function Eratostenes(n) {
    var primo=[];
    for (i=2; i<n; i++){
        primo[i]=true;

    }
    for (i=2; i<n; i++){
        for (j=2; i*j<n; j++){
            primo[i*j]=false;
        }
    }
    for (i=0; i<n; i++){
        if (primo[i]){
            console.log (i);
        }
    }
}

