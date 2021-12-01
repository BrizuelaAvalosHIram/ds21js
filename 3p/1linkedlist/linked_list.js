//Brizuela Avalos Hiram
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    console.log(newElement, item);
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var n = new LList();
let newItem, tmp;
var pasos = 0;
console.time("Tiempo");
for (i = 0; i < 10000; i++) {
    newItem = getRandomInt(1, 10000);
    n.insert(newItem, tmp ? tmp : 'head')
    tmp = newItem;
    pasos++;
}


console.timeEnd("Tiempo");
console.log("Pasos: "+pasos);


