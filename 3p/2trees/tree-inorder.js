//Brizuela Avalos Hiram
/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
*/
 //Definimos la estructura de datos
function Node(obj){
    this.data = obj;  
    this.left = null; 
    this.right = null;
}

let a = new Node('+'); //Definimos los nodos
let b1 = new Node(14);
let b2 = new Node(15);
//Asignar los hijos
a.left = b1;
a.right = b2;

console.log("Inorder");
inorder(a); //Llamar a la función 
function inorder(n){
    if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}
 
