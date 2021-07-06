class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insert(newNode, this.root);
        }
    }

    #insert(newNode, node) {
        if (newNode.value < node.value) {
            if (!node.leftChild) {
                node.leftChild = newNode;
            } else {
                this.#insert(node.leftChild, newNode);
            }
        } else {
            if (!node.rightChild) {
                node.rightChild = newNode;
            } else {
                this.#insert(node.rightChild, newNode);
            }
        }
    }

    search(value, node = this.root) {
        if (!node || node.value === value) {
            return node;
        } else if (value < node.value) {
            return this.search(value, node.leftChild);
        } else {
            return this.search(value, node.rightChild);
        }
    }
}

let bst = new BinarySearchTree();

bst.add(15);
bst.add(7);
bst.add(4);
bst.add(8);
bst.add(10);
bst.add(20);
bst.add(25);
bst.add(18);
bst.add(21);

console.log(bst);
console.log(bst.search(1));
