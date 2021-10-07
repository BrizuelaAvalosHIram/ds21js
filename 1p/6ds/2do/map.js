//Brizuela Avalos Hiram 3°F
// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

const nombres = new Map();
var limi=100000;
var contador = 0;
var nombre=[];
var tiempo = 0;

while (contador<7){
    for (var i=0; i<limi; i++){
        nombre[i] = parseInt(Math.random()*limi)+1;
    }


//tiempo
var InicioTiempo = new Date();

for (var j =0; j<limi; j++){
    nombres.set((j+1), 'name'+ nombre[j]);
}

var FinTiempo = new Date() - InicioTiempo;

tiempo = tiempo+FinTiempo;

console.log ( "el tiempo  de la corrida "+(contador+1)+ " es: "+ FinTiempo+" ms");
contador++;
}
console.log ("tiempo promedio: "+(tiempo/7)+" ms"); 
