//Brizuela Avalos Hiram
function Node(obj) {
    this.data = obj;  
    this.left = null; 
    this.right = null;
}

let a = new Node('+');  //Se definen los nodos
let b1 = new Node(24);
let b2 = new Node(25);

a.left = b1;        //Asignamos los hijos
a.right = b2;

console.log("Posorder");
posorder(a); //Llamar a la función 
function posorder(n) {
    if (n!==null) {
        posorder(n.left);
        posorder(n.right);
        console.log(n.data);
    }
}
