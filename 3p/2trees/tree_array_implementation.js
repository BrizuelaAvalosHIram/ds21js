//Brizuela Avalos Hiram

function Node(obj){  //Se define la estructura de los datos
    this.data =obj; 
    this.left=null;
    this.right=null;
}

var a = [];

a[0] = new Node('+'); // Definimos los nodos
a[1] = new Node(5);
a[2] = new Node(6);
a[3] = new Node(7);
a[4] = new Node(8);
a[5] = new Node(9);
a[6] = new Node(10);

a[0].left = a[1];     //Asignamos los hijos
a[0].right = a[2];
a[1].left = a[3];
a[1].right = a[4];
a[2].left = a[5];
a[2].right = a[6];

console.log("Inorder");
inorder(a[0]); //Llamar a la función Inorder
function inorder(n){
    if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}
