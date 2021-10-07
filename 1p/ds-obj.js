//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
// 

// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs
var nombres = {};
var limi=100000;
var contador=0;
var nombre=[];
var tiempo=0;


const agregar = (key, value) => nombres[key] = value;

while (contador<7){
    for (var i =0; i<limi;i++){
        nombre[i] = parseInt(Math.random()*limi)+1;

    }

    var InicioTiempo = new Date();
    for (var j =0; j<limi; j++){
        agregar((j+1), 'name' + nombre[j]);
    }

    var FinTiempo = new Date() - InicioTiempo;

    tiempo = tiempo + FinTiempo;

    console.log("el tiempo de la "+(contador+1) + " corrida es: "+FinTiempo+" ms");
    contador++;

}
console.log(nombre);
console.log ("El tiempo promedio es: "+(tiempo/7)+" ms");

