//Brizuela Avalos Hiram

function Node(data) { //Estrucutra de la lista
    this.data = data;
    this.next = next;
  }  
function Stack() { //Estrucutra de la pila
    this.push = push;
    this.head = null;
  }
//Colocamos la función para introducir elementos a la pila
function push() { 
    const nuevoobjeto = new Node(c, this.head)
    this.head = newItem;}

var cont= 1,tiempo=0, contador2=0;
while(cont<8){
  //comenzamos a contar el tiempo
    var inicio = new Date(); 
    var contador=0,b;
    var s = new Stack();
    var numero=numeros(1,10000)
    function numeros(min,max){
        for(let i=0;i<10000;i++){          
            s.push=Math.floor(Math.random()* (max - min)) + min;       
            contador++; } }
    var fin = new Date() - inicio;
    tiempo = tiempo + fin; //Aquí termina de contar el tiempo
    console.log("La corrida "+cont+" tardó "+fin+"ms")
    cont++; contador2=contador2+contador;
}
console.log("El tiempo promedio es: "+(tiempo/7)+" ms"); //Promedio
