//Brizuela Avalos Hiram 3°F
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING


//1. bubblesort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
function numeros (){
    var pasos=0;
    const myArray = [];
    for (let i = 0; i<10000; i++){
        myArray.push(Math.floor((Math.random() * (10000 - 1 + 1)) + 1));
       
    }
    console.log(myArray);

    let len = myArray.length;
    console.time("Tiempo");
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (myArray[j] > myArray[j + 1]) {
                let tmp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = tmp;
            }
        }
        pasos++;
        
    }
    console.timeEnd("Tiempo");
    console.log(myArray);
    console.log("Pasos "+pasos);
    

}
numeros();

