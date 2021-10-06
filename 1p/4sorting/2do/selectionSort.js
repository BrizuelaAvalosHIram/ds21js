//Brizuela Avalos Hiram 3°F
//2. selectionsort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

// forEach
// + verify is sorted
//
// + print
// - time it took
// - steps it tooks

function numeros (){
    var pasos=0;
    const myArray = [];
    for (let i = 0; i<10000; i++){
        myArray.push(Math.floor((Math.random() * (10000 - 1 + 1)) + 1));
        pasos++;
    }
    
    console.log(myArray);

    console.time("Tiempo");
    for (let i=0; i<myArray.length ; i++){
        let min = i;
        for (let j= i+1; j< myArray.length; j++){
            if (myArray[j] < myArray[min]){
                min=j;
            }
        }
        if (min != i){
            let tmp = myArray[i];
            myArray[i] = myArray[min]
            myArray[min]=tmp;
        }
    }
    console.timeEnd("Tiempo");
    console.log(myArray);
    console.log("Pasos "+pasos);

    
  

}
numeros();
