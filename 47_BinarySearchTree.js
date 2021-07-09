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
                this.#insert(newNode, node.leftChild);
            }
        } else {
            if (!node.rightChild) {
                node.rightChild = newNode;
            } else {
                this.#insert(newNode, node.rightChild);
            }
        }
    }

    search(value, node = this.root) {
        if (!node || node.value === value) {
            return node;
        } else if (value < node.value) {
            return this.search(value, node.leftChild);
        } else if (value > node.value) {
            return this.search(value, node.rightChild);
        }
    }

    delete(valueToDelete, node = this.root) {
        if (!node) {
            return node;
        } else if (valueToDelete < node.value) {
            node.leftChild = this.delete(valueToDelete, node.leftChild);
            return node;
        } else if (valueToDelete > node.value) {
            node.rightChild = this.delete(valueToDelete, node.rightChild);
            return node;
        } else if (valueToDelete === node.value) {
            if (!node.rightChild && !node.leftChild) {
                return null;
            } else if (!node.leftChild) {
                return node.rightChild;
            } else if (!node.rightChild) {
                return node.leftChild;
            } else {
                if (!node.rightChild.leftChild) {
                    node.value = node.rightChild.value;
                    node.rightChild = node.rightChild.rightChild;

                    return node;
                } else {
                    let min = node.rightChild.leftChild;

                    while (min) {
                        if (!min.leftChild) {
                            node.value = min.value;
                            console.log(min);
                            if (min.rightChild) {
                                min.value = min.rightChild.value;

                                [min.rightChild, min.leftChild] = [
                                    min.rightChild.rightChild,
                                    min.rightChild.leftChild
                                ];
                            } else {
                                this.delete(min.value, node.rightChild);
                            }
                            return node;
                        }
                        min = min.leftChild;
                    }
                }
            }
        }
    }
}

/*
                            15
                      7              20
                    4   8       18       25
                 2         10         22 
                    3        11     21
                                      21.5


                             18
                      7              21
                    4   8                25
                 2         10         22 
                    3        11    21.5

*/

let bst = new BinarySearchTree();

bst.add(15);
bst.add(7);
bst.add(4);
bst.add(8);
bst.add(10);
bst.add(20);
bst.add(25);
bst.add(22);
bst.add(21);
bst.add(21.5);
bst.add(18);

bst.add(11);
bst.add(2);
bst.add(3);

bst.delete(20);
